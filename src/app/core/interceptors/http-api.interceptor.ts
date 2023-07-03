import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KeycloakConfig } from '../utils/config.core';
import { StorageService } from '../services/storage.service';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  constructor(private storageCore: StorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Content-Type': request.url == KeycloakConfig.keycloakUrlForToken ? 'application/x-www-form-urlencoded' : 'application/json',
        // Authorization: 'Bearer ' + this.storageCore.accessToken,
      },
    });

    return next.handle(request);
  }
}
