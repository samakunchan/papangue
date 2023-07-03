import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorMessage, KeycloakConfig } from '../../core/utils/config.core';
import { BehaviorSubject, iif, mergeMap, Observable, of, tap, throwError } from 'rxjs';
import { StorageCore } from '../../core/storage/storage.core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthUser } from '../../core/models/auth-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private loadedBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public loaded$: Observable<boolean> = this.loadedBehaviorSubject.asObservable();

  constructor(private httpClient: HttpClient, private storage: StorageCore, private jwtHelperService: JwtHelperService) {}

  /**
   * @description Récupère le token, le refresh token, l'id token ect... à partir du code dans les params de l'url
   * @author Samakunchan
   * @param code string
   * @example ```json
   // Tokens
     {
       "access_token": "xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx",
       "expires_in": 1800,
       "refresh_expires_in": 0,
       "refresh_token": "xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx",
       "token_type": "Bearer",
       "id_token": "xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx",
       "not-before-policy": 999999999,
       "session_state": "xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx",
       "scope": "openid phone profile siren email offline_access"
     }
     // User infos:
     {
        "exp": 1682844140,
        "iat": 1682842340,
        "auth_time": 1682842078,
        "jti": "xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx",
        "iss": "https://secure-connect.devpapangue.com/realms/ppg-connect",
        "aud": "account",
        "sub": "xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx",
        "typ": "Bearer",
        "azp": "mon client id",
        "session_state": "xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx",
        "acr": "0",
        "allowed-origins": [],
        "realm_access": {
            "roles": [...]
        },
        "resource_access": {
            "account": {
                "roles": [...]
            }
        },
        "scope": "openid siren profile email offline_access",
        "sid": "xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx",
        "siren": "999999999",
        "email_verified": true,
        "name": "John Doe",
        "preferred_username": "john.doe@gmail.com",
        "given_name": "John",
        "family_name": "Doe",
        "email": "john.doe@gmail.com"
     }
   * ```
   */
  storeTokensWithCodeAndReturnUser(code: string): Observable<Record<string, any>> {
    const body: URLSearchParams = new URLSearchParams();
    body.set('grant_type', 'authorization_code');
    body.set('client_id', KeycloakConfig.clientId);
    body.set('code', code);
    body.set('redirect_uri', KeycloakConfig.redirectUri);
    body.set('code_verifier', KeycloakConfig.codeVerifier);
    return this.httpClient.post<Record<string, any>>(`${KeycloakConfig.keycloakUrlForToken}`, body.toString()).pipe(
      mergeMap((response: Record<string, any>): Observable<any> => {
        this.storage.idToken = response['id_token'];
        this.storage.refreshToken = response['refresh_token'];
        this.storage.accessToken = response['access_token'];
        return this.getDecodedAccessToken(response);
      }),
      tap((response: Record<string, any>) => (this.storage.currentUser = JSON.parse(JSON.stringify(AuthUser.fromJson(response))))),
    );
  }

  /**
   * @description Affiche les infos utilisateurs à partir de l'access token
   * @author Samakunchan
   * @param record Record<string, any>
   * @example ```json
    {
        "exp": 1682844140,
        "iat": 1682842340,
        "auth_time": 1682842078,
        "jti": "xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx",
        "iss": "https://secure-connect.devpapangue.com/realms/ppg-connect",
        "aud": "account",
        "sub": "xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx",
        "typ": "Bearer",
        "azp": "mon client id",
        "session_state": "xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx",
        "acr": "0",
        "allowed-origins": [],
        "realm_access": {
            "roles": [...]
        },
        "resource_access": {
            "account": {
                "roles": [...]
            }
        },
        "scope": "openid siren profile email offline_access",
        "sid": "xxxxxxxxxxxxxx.xxxxxxxxxxxxxxxxx.xxxxxxxxxxxx",
        "siren": "999999999",
        "email_verified": true,
        "name": "John Doe",
        "preferred_username": "john.doe@gmail.com",
        "given_name": "John",
        "family_name": "Doe",
        "email": "john.doe@gmail.com"
    }
   * ```
   */
  getDecodedAccessToken(record: Record<string, any>): Observable<any> {
    try {
      if (record['access_token'] != null) {
        return of(this.jwtHelperService.decodeToken<Record<string, any>>(record['access_token']));
      } else {
        return throwError(() => new Error(ErrorMessage.noAccessToken));
      }
    } catch (e: any) {
      return throwError(() => new Error(e.message));
    }
  }

  /**
   * @description Méthode qui détecte si le token est expiré
   * @author Samakunchan
   * @param {string} token
   * @return {boolean}
   * @example dans le guard ```ts
     class LoggedGuard {
       constructor(private authenticationService: AuthenticationService, private storage: StorageCore) {}

       canActivate(): boolean {
         return !this.authenticationService.isTokenExpired(this.storage.accessToken);
       }
     }
   * ```
   */
  isTokenExpired(token: string): boolean {
    try {
      return this.jwtHelperService.isTokenExpired(token);
    } catch (e: any) {
      throw new Error(ErrorMessage.noAccessToken);
    }
  }

  /**
   * @description Méthode dont le but est de vérifier en permanance si l'utilisateur est bien authentifié et que son token est valide
   * @author Samakunchan
   * @return {Observable<boolean>}
   * @example ```ts
    of(this.storage.accessToken).pipe(
      mergeMap((accessToken: string) =>
        iif(
          (): boolean => votre condition,
          observableSiTrue$,
          observableSiFalse$,
        ),
      )
    ```
   */
  checkUserIsLogged(): Observable<boolean> {
    const tokenIsValid$: Observable<boolean> = of(true).pipe(tap((value: boolean): void => this.loadedBehaviorSubject.next(value)));
    const tokenNotIsValid$: Observable<boolean> = of(false).pipe(tap((value: boolean): void => this.loadedBehaviorSubject.next(value)));
    return of(this.storage.accessToken).pipe(
      mergeMap((accessToken: string) =>
        iif((): boolean => accessToken != ErrorMessage.noAccessToken && !this.isTokenExpired(accessToken), tokenIsValid$, tokenNotIsValid$),
      ),
    );
  }
}
