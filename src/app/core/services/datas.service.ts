import { Injectable } from '@angular/core';
import { IResponseApi } from '../interfaces/response-api.interface';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class DatasService {
  /**
   * @private
   * @type BehaviorSubject<IResponseApi>
   * @description Stock le résultat de la reponse.
   */
  private datasSubject: BehaviorSubject<IResponseApi> = new BehaviorSubject<IResponseApi>({} as IResponseApi);

  /**
   * @type Observable<IResponseApi>
   * @description Observable qui fait référence au contenu du store.
   */
  datasResult$: Observable<IResponseApi> = this.datasSubject.asObservable();
  /**
   * @private
   * @type string
   * @description Endpoints pour call l'api
   */
  private apiUrl: string = '/pages-datas';

  constructor(private apiService: ApiService) {}

  /**
   * @return Observable<IResponseApi>
   * @description Charge les données des pages
   * @description Elle est utilisable que dans le service
   */
  loadDatasPages(): Observable<IResponseApi> {
    return this.apiService.get<IResponseApi>(this.apiUrl).pipe(
      tap((responseApi: IResponseApi) => {
        return this.datasSubject.next(responseApi); // Remettre le data dans l'API ou faire la modif pour se passe du string
      }),
      catchError((err) => throwError(err)),
    );
  }
}
