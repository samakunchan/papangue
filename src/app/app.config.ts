import {
  APP_INITIALIZER,
  ApplicationConfig,
  ErrorHandler,
  importProvidersFrom,
  isDevMode,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { ServiceWorkerModule } from '@angular/service-worker';
import { detectionApisReady } from './core/utils/initializer';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DatasService } from './core/services/datas.service';
import { environment } from '../environments/environment';
import { HttpApiInterceptor } from './core/interceptors/http-api.interceptor';
import { HttpMockApiInterceptor } from './core/interceptors/http-mock-api.interceptor';
import { CommonAndHttpResponseError } from './core/errors/common-and-http-response.error';
import { WINDOW_PROVIDERS } from './core/services/windows.service';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      BrowserModule,
      AppRoutingModule,
      ToastrModule.forRoot({
        progressBar: true,
        closeButton: true,
        newestOnTop: true,
        positionClass: 'bottom-left',
        titleClass: 'underline',
      }),
      ServiceWorkerModule.register('ngsw-worker.js', {
        enabled: !isDevMode(),
        // Register the ServiceWorker as soon as the application is stable
        // or after 30 seconds (whichever comes first).
        registrationStrategy: 'registerWhenStable:30000',
      }),
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: detectionApisReady,
      deps: [HttpClient, DatasService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: environment.production ? HttpApiInterceptor : HttpMockApiInterceptor,
      // useClass: HttpApiInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: CommonAndHttpResponseError,
    },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    WINDOW_PROVIDERS,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
  ],
};
