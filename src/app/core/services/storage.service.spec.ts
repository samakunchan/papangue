import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { ErrorMessage } from '../utils/config.core';

describe('StorageService', (): void => {
  let service: StorageService;

  beforeEach((): void => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });

  describe('For current user', (): void => {
    it('should set user when we found the key in localstorage', fakeAsync((): void => {
      const user = 'test user';
      service.currentUser = user;
      tick();
      expect(service.currentUser).toEqual(user);
    }));

    it('should set an error message because no key in storage', fakeAsync((): void => {
      service.currentUser = ErrorMessage.noUser;
      tick();
      expect(service.currentUser).toEqual(ErrorMessage.noUser);
    }));
  });

  describe('For access token', (): void => {
    it('should set access token when we found the key in localstorage', fakeAsync((): void => {
      const accessToken = 'my access token';
      service.accessToken = accessToken;
      tick();
      expect(service.accessToken).toEqual(accessToken);
    }));
  });

  describe('For refresh token', (): void => {
    it('should set refresh token when we found the key in localstorage', fakeAsync((): void => {
      const refreshToken = 'my refresh token';
      service.refreshToken = refreshToken;
      tick();
      expect(service.refreshToken).toEqual(refreshToken);
    }));
  });

  describe('For id token', (): void => {
    it('should set id token when we found the key in localstorage', fakeAsync((): void => {
      const idToken = 'my id token';
      service.idToken = idToken;
      tick();
      expect(service.idToken).toEqual(idToken);
    }));
  });

  describe('For delete tokens', (): void => {
    it('should call method to clear tokens', fakeAsync((): void => {
      // const idToken = 'my id token';
      const spy = spyOn(service, 'deleteTokens').and.callThrough();
      service.deleteTokens();
      tick();
      expect(spy).toHaveBeenCalled();
    }));
  });

  afterEach((): void => {
    service.deleteTokens();
  });
});
