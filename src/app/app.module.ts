import { APP_INITIALIZER, ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonAndHttpResponseError } from './core/errors/common-and-http-response.error';
import { HttpApiInterceptor } from './core/interceptors/http-api.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { AuthenticationModule } from './authentication/authentication.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './authentication/services/authentication.service';
import { dectectionApiReady, dectectionAuthUserConnected } from './core/utils/initializer';
import { PagesPublicModule } from './pages/pages-public/pages-public.module';
import { SecuredPagesModule } from './pages/secured-pages/secured-pages.module';
import { WINDOW_PROVIDERS } from './core/services/windows.service';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    PagesPublicModule,
    SecuredPagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => '',
        allowedDomains: ['localhost:4200'],
      },
    }),
    ToastrModule.forRoot({
      progressBar: true,
      closeButton: true,
      newestOnTop: true,
      positionClass: 'bottom-left',
      titleClass: 'underline',
    }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: dectectionApiReady,
      deps: [HttpClient],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: dectectionAuthUserConnected,
      deps: [ActivatedRoute, Router, AuthenticationService],
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: CommonAndHttpResponseError,
    },
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpApiInterceptor,
      multi: true,
    },
    WINDOW_PROVIDERS,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
