import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { combineLatest, filter, iif, mergeMap, Observable, of, switchMap, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { KeycloakConfig } from './config.core';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { IFreelanceApi } from '../interfaces/freelance-api.interface';
import { IKeycloak } from '../interfaces/keycloak.interface';

/**
 * @description Factory qui sert à detecter si les API sont actives
 * @description Initialiser dans AppModule
 * @param {HttpClient} httpClient
 * @return {() => Observable<[Object, Object]>}
 * @author Samakunchan
 * @example ```ts
 *   providers: [
 *     {
 *       provide: APP_INITIALIZER,
 *       useFactory: dectectionApiReady,
 *       deps: [HttpClient],
 *       multi: true,
 *     },
 *  ]
 * ```
 */
export const dectectionApiReady = (httpClient: HttpClient): (() => Observable<[IFreelanceApi, IKeycloak]>) => {
  return (): Observable<[IFreelanceApi, IKeycloak]> =>
    combineLatest([
      httpClient.get<IFreelanceApi>(`${environment.apiUrl}`),
      httpClient.get<IKeycloak>(`${KeycloakConfig.keycloakAllInfosUrl}`),
    ]).pipe(tap(() => console.log(`Initialisation de l'app en %c${window.performance.now() / 1000}s`, 'color: #2780e1')));
};

/**
 * @description Permet de lancer l'étape "Connexion utilisateur keycloak"
 * @description Puis vérifie en permanance si l'utilisateur est connecté ou non
 * @param {ActivatedRoute} route
 * @param {Router} router
 * @param {AuthenticationService} authenticationService
 * @return {() => Observable<boolean>}
 * @author Samakunchan
 * @example ```ts
 *   providers: [
 *     {
 *       provide: APP_INITIALIZER,
 *       useFactory: dectectionAuthUserConnected,
 *       deps: [ActivatedRoute, Router, AuthenticationService], // doit être dans l'ordre
 *       multi: true,
 *     },
 *  ]
 * ```
 */
export const dectectionAuthUserConnected = (
  route: ActivatedRoute,
  router: Router,
  authenticationService: AuthenticationService,
): (() => Observable<boolean>) => {
  route.queryParams
    .pipe(
      filter((params: Params): boolean => params['code'] != null),
      switchMap((params: Params): Observable<Record<string, any>> => authenticationService.storeTokensWithCodeAndReturnUser(params['code'])),
      switchMap(() => authenticationService.checkUserIsLogged()),
      tap(() => router.navigate(['/'])),
    )
    .subscribe();
  return (): Observable<boolean> => of(true);
};

/**
 * @description Sert a détecter si le storage contient un token et si il est non expiré
 * @param {ActivatedRoute} route
 * @param {AuthenticationService} authenticationService
 * @return {() => Observable<boolean>}
 * @author Samakunchan
 * @example ```ts
 *   providers: [
 *     {
 *       provide: APP_INITIALIZER,
 *       useFactory: dectectionAuthenticationToken,
 *       deps: [ActivatedRoute, AuthenticationService],
 *       multi: true,
 *     },
 *   ],
 * ```
 */
export const dectectionAuthenticationToken = (
  route: ActivatedRoute,
  authenticationService: AuthenticationService,
): (() => Observable<boolean>) => {
  const getTokenFromKeycloak$: Observable<boolean> = of(route.queryParams).pipe(
    mergeMap((params: Params): Observable<Record<string, any>> => authenticationService.storeTokensWithCodeAndReturnUser(params['code'])),
    mergeMap(() => authenticationService.checkUserIsLogged()),
  );
  const doNothing$: Observable<boolean> = authenticationService.checkUserIsLogged();

  return (): Observable<boolean> =>
    of(route.queryParams).pipe(mergeMap((params: Params) => iif((): boolean => params['code'] != null, getTokenFromKeycloak$, doNothing$)));
};
