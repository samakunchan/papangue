import { HttpClient } from '@angular/common/http';
import { combineLatest, firstValueFrom, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { IFreelanceApi } from '../interfaces/freelance-api.interface';
import { DatasService } from '../services/datas.service';

/**
 * @description Factory qui sert à detecter si les API sont actives
 * @description Initialiser dans AppModule
 * @param {HttpClient} httpClient
 * @param datasService
 * @return {() => Observable<[IFreelanceApi]>}
 * @author Samakunchan
 * @example ```ts
 providers: [
 {
         provide: APP_INITIALIZER,
         useFactory: detectionApisReady,
         deps: [HttpClient],
         multi: true,
       },
 ]
 * ```
 */
export const detectionApisReady = (httpClient: HttpClient, datasService: DatasService): (() => Observable<[IFreelanceApi]>) => {
  firstValueFrom(datasService.loadDatasPages()).then(); // TODO load ça dans son propre initializer

  return (): Observable<[IFreelanceApi]> =>
    combineLatest([httpClient.get<IFreelanceApi>(`${environment.apiUrl}`)]).pipe(
      tap(() => console.log(`Initialisation de l'app en %c${window.performance.now() / 1000}s`, 'color: #2780e1')),
    );
};
