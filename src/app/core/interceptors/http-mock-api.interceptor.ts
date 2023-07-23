import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { selectHandler } from './mock.config';
import { Observable } from 'rxjs';

@Injectable()
export class HttpMockApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });

    const mockEndpointHandler = selectHandler(request);
    return mockEndpointHandler ? mockEndpointHandler() : next.handle(request);
  }
}
