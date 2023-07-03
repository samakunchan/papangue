import { ErrorHandler, Inject, Injectable, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActiveToast, ToastrService } from 'ngx-toastr';
import { ErrorMessage } from '../utils/config.core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CommonAndHttpResponseError implements ErrorHandler {
  constructor(@Inject(Injector) private readonly injector: Injector, private zone: NgZone, private router: Router) {}

  private get toast() {
    return this.injector.get(ToastrService);
  }

  handleError(error: Error | HttpErrorResponse): ActiveToast<string> {
    if (!navigator.onLine) {
      return this.zone.run(() => this.toast.warning(ErrorMessage.internetOffline, ErrorMessage.title));
    }

    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 0:
          return this.zone.run(() => this.toast.warning(ErrorMessage.errorServer, ErrorMessage.title));
        case 401:
          return this.zone.run(() => this.toast.warning(ErrorMessage.unAuthorized, ErrorMessage.title));
        case 404:
          return this.zone.run(() => this.toast.warning(ErrorMessage.notFound, ErrorMessage.title));
        case 504:
          return this.zone.run(() => this.toast.warning(ErrorMessage.errorServer, ErrorMessage.title));
        default:
          return this.zone.run(() => this.toast.error(ErrorMessage.commonError, ErrorMessage.title));
      }
    } else {
      switch (true) {
        case error.message.includes(ErrorMessage.urlConstructor) && error.message.includes(ErrorMessage.isNotValidUrl):
          return this.zone.run(() => this.toast.error(ErrorMessage.serverOffline, ErrorMessage.title + ' Normal'));
        case error.message.includes(ErrorMessage.noAccessToken):
          this.router.navigate(['/']).then();
          return this.zone.run(() => this.toast.error(ErrorMessage.sessionExpired, ErrorMessage.title + ' Normal'));
        case error.message.includes(ErrorMessage.noUser):
          return this.zone.run(() => this.toast.warning(ErrorMessage.noUser, ErrorMessage.title + ' Normal'));
        case error.message.includes(ErrorMessage.sessionExpired):
          return this.zone.run(() => this.toast.warning(ErrorMessage.sessionExpired, ErrorMessage.title + ' Normal'));
        default:
          return this.zone.run(() => this.toast.error(`${ErrorMessage.commonError}`, ErrorMessage.title + ' Normal'));
      }
    }
  }
}
