import { CanActivateFn } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { StorageCore } from '../storage/storage.core';

@Injectable({
  providedIn: 'root',
})
class LoggedGuard {
  constructor(private authenticationService: AuthenticationService, private storage: StorageCore) {}

  canActivate(): boolean {
    return !this.authenticationService.isTokenExpired(this.storage.accessToken);
  }
}

export const canActivateAdminPage: CanActivateFn = () => inject(LoggedGuard).canActivate();
