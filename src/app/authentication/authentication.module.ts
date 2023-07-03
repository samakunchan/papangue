import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { dectectionAuthenticationToken } from '../core/utils/initializer';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: dectectionAuthenticationToken,
      deps: [ActivatedRoute, AuthenticationService],
      multi: true,
    },
  ],
})
export class AuthenticationModule {}
