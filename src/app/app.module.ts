import { APP_INITIALIZER, ErrorHandler, isDevMode, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonAndHttpResponseError } from './core/errors/common-and-http-response.error';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { WINDOW_PROVIDERS } from './core/services/windows.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { detectionApisReady } from './core/utils/initializer';
import { environment } from '../environments/environment';
import { HttpMockApiInterceptor } from './core/interceptors/http-mock-api.interceptor';
import { HttpApiInterceptor } from './core/interceptors/http-api.interceptor';
import { DatasService } from './core/services/datas.service';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
  ],
  providers: [
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
