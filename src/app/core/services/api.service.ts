import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  public get<T>(route: string): Observable<T> {
    const fullRoute: string = this.apiUrl + route;
    return this.http.get<T>(fullRoute);
  }

  public post<T>(route: string, body: Record<string, any>, responseType: any = 'json'): Observable<T> {
    const fullRoute: string = this.apiUrl + route;
    return this.http.post<T>(fullRoute, body, { responseType });
  }

  public patch<T>(route: string, body: Record<string, any>): Observable<T> {
    const fullRoute: string = this.apiUrl + route;
    return this.http.patch<T>(fullRoute, body);
  }

  public put<T>(route: string, body: Record<string, any>): Observable<T> {
    const fullRoute: string = this.apiUrl + route;
    return this.http.put<T>(fullRoute, body);
  }

  public remove<T>(route: string): Observable<T> {
    const fullRoute = this.apiUrl + route;
    return this.http.delete<T>(fullRoute);
  }

  public upload<T>(route: string, formData: FormData): Observable<HttpEvent<T>> {
    const fullRoute: string = this.apiUrl + route;

    return this.http.post<T>(fullRoute, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
