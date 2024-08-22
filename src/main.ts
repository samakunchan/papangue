import { APP_INITIALIZER, ErrorHandler, importProvidersFrom, isDevMode, LOCALE_ID } from '@angular/core';
import { detectionApisReady } from './app/core/utils/initializer';
import { HTTP_INTERCEPTORS, HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DatasService } from './app/core/services/datas.service';
import { environment } from './environments/environment';
import { HttpApiInterceptor } from './app/core/interceptors/http-api.interceptor';
import { HttpMockApiInterceptor } from './app/core/interceptors/http-mock-api.interceptor';
import { CommonAndHttpResponseError } from './app/core/errors/common-and-http-response.error';
import { WINDOW_PROVIDERS } from './app/core/services/windows.service';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
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
  ],
}).catch((err) => console.error(err));
