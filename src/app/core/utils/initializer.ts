import { HttpClient } from '@angular/common/http';
import { combineLatest, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IFreelanceApi } from '../interfaces/freelance-api.interface';

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
export const dectectionApiReady = (httpClient: HttpClient): (() => Observable<[IFreelanceApi]>) => {
  return (): Observable<[IFreelanceApi]> =>
    combineLatest([httpClient.get<IFreelanceApi>(`${environment.apiUrl}`)]).pipe(
      tap(() => console.log(`Initialisation de l'app en %c${window.performance.now() / 1000}s`, 'color: #2780e1')),
    );
};
