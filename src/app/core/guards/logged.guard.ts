import { CanActivateFn } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
class LoggedGuard {
  constructor(private authenticationService: AuthenticationService, private storage: StorageService) {}

  canActivate(): boolean {
    return !this.authenticationService.isTokenExpired(this.storage.accessToken);
  }
}

export const canActivateAdminPage: CanActivateFn = () => inject(LoggedGuard).canActivate();
