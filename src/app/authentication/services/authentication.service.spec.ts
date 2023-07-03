import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { FakeTestDatas } from '../../core/utils/fake-test-datas';
import { ErrorMessage } from '../../core/utils/config.core';
import { StorageCore } from '../../core/storage/storage.core';
import { AuthUser } from '../../core/models/auth-user.model';

describe('AuthenticationService', (): void => {
  const body: URLSearchParams = new URLSearchParams();
  const fakeDatas: FakeTestDatas = new FakeTestDatas();
  let service: AuthenticationService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let jwtDecodeSpy: jasmine.SpyObj<JwtHelperService>;
  let storageSpy: jasmine.SpyObj<StorageCore>;

  describe('When everything work well', (): void => {
    beforeEach((): void => {
      body.set('grant_type', 'authorization_code');
      body.set('client_id', 'client_id_test');
      body.set('code', '123456789');
      body.set('redirect_uri', 'my-test-website.com');
      body.set('code_verifier', '974');

      httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['post']);
      httpClientSpy.post.and.returnValue(of(fakeDatas.fakeTokens));

      jwtDecodeSpy = jasmine.createSpyObj<JwtHelperService>('JwtHelperService', ['decodeToken', 'isTokenExpired']);
      jwtDecodeSpy.decodeToken.and.returnValue(fakeDatas.fakeDecodedToken);
      // @ts-ignore
      jwtDecodeSpy.isTokenExpired.and.resolveTo(false).and.returnValue(false);

      storageSpy = jasmine.createSpyObj<StorageCore>('StorageCore', ['accessToken', 'refreshToken', 'idToken', 'currentUser']);

      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          JwtModule.forRoot({
            config: {
              tokenGetter: (): string => '',
              allowedDomains: ['my-testing-env.com'],
            },
          }),
        ],
        providers: [
          {
            provide: HttpClient,
            useValue: httpClientSpy,
          },
          {
            provide: JwtHelperService,
            useValue: jwtDecodeSpy,
          },
          {
            provide: StorageCore,
            useValue: storageSpy,
          },
        ],
      });
      service = TestBed.inject(AuthenticationService);
    });

    it('should be created', (): void => {
      expect(service).toBeTruthy();
    });

    describe('With "code" in params url', (): void => {
      it('body should be correct', (): void => {
        expect(body.get('grant_type')).toBe('authorization_code');
        expect(body.get('client_id')).toBe('client_id_test');
        expect(body.get('code')).toBe('123456789');
        expect(body.get('redirect_uri')).toBe('my-test-website.com');
        expect(body.get('code_verifier')).toBe('974');
      });

      it('should store and decode tokens of User', (): void => {
        service.storeTokensWithCodeAndReturnUser('123456789').subscribe({
          next: (response: Record<string, any>): void => {
            expect(response).toEqual(fakeDatas.fakeDecodedToken);
          },
        });
      });
    });

    it('should decode tokens only', (): void => {
      service.getDecodedAccessToken(fakeDatas.fakeTokens).subscribe({
        next: (response: Record<string, any>): void => {
          expect(response).toEqual(fakeDatas.fakeDecodedToken);
          storageSpy.idToken = fakeDatas.fakeTokens['id_token'];
          storageSpy.refreshToken = fakeDatas.fakeTokens['refresh_token'];
          storageSpy.accessToken = fakeDatas.fakeTokens['access_token'];
          storageSpy.currentUser = JSON.parse(JSON.stringify(AuthUser.fromJson(response)));

          expect(storageSpy.idToken).toEqual(fakeDatas.fakeTokens['id_token']);
          expect(storageSpy.refreshToken).toEqual(fakeDatas.fakeTokens['refresh_token']);
          expect(storageSpy.accessToken).toEqual(fakeDatas.fakeTokens['access_token']);
          expect(storageSpy.currentUser).toEqual(JSON.parse(JSON.stringify(AuthUser.fromJson(response))));
        },
      });
    });

    it('should detect the token is valid', (): void => {
      const isTokenExpired: boolean = service.isTokenExpired(fakeDatas.fakeTokens['access_token']);
      expect(isTokenExpired).toBe(false);
    });

    it('should check if user is logged', (): void => {
      service.checkUserIsLogged().subscribe({
        next: (isUserLogged: boolean): void => {
          expect(isUserLogged).toBe(true);
        },
      });
    });
  });

  describe('When everything fail', (): void => {
    beforeEach((): void => {
      jwtDecodeSpy = jasmine.createSpyObj<JwtHelperService>('JwtHelperService', ['decodeToken', 'isTokenExpired']);
      jwtDecodeSpy.decodeToken.and.throwError('Erreur test');
      // @ts-ignore
      jwtDecodeSpy.isTokenExpired.and.throwError();

      TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          JwtModule.forRoot({
            config: {
              tokenGetter: (): string => '',
              allowedDomains: ['my-testing-env.com'],
            },
          }),
        ],
        providers: [
          {
            provide: JwtHelperService,
            useValue: jwtDecodeSpy,
          },
        ],
      });
      service = TestBed.inject(AuthenticationService);
    });

    describe('With "code" in params url', (): void => {
      it('should throw error when we try to decode tokens with no access token', (): void => {
        service
          .getDecodedAccessToken({
            ...fakeDatas.fakeTokens,
            access_token: null,
          })
          .subscribe({
            error: (error: Error): void => {
              expect(error.message).toEqual(ErrorMessage.noAccessToken);
            },
          });
      });
      it('should throw error when something wrong appen', (): void => {
        service.getDecodedAccessToken(fakeDatas.fakeTokens).subscribe({
          error: (error: Error): void => {
            expect(error.message).toEqual('Erreur test');
          },
        });
      });

      it('should throw error when detect the token is not valid', (): void => {
        expect((): void => {
          service.isTokenExpired(fakeDatas.fakeTokens['access_token']);
        }).toThrow();
      });

      it('should confirm user are not logged', (): void => {
        service.checkUserIsLogged().subscribe({
          next: (isUserLogged: boolean): void => {
            expect(isUserLogged).toBe(false);
          },
        });
      });
    });
  });
});
