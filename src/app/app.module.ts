import { APP_INITIALIZER, ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonAndHttpResponseError } from './core/errors/common-and-http-response.error';
import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { dectectionApiReady } from './core/utils/initializer';
import { WINDOW_PROVIDERS } from './core/services/windows.service';

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
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: dectectionApiReady,
      deps: [HttpClient],
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
