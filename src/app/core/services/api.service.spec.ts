import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { FakeTestDatas } from '../utils/fake-test-datas';
import { ErrorResponseModel } from '../models/error-response.model';

interface IDummyReponseTest {
  statusCode: number;
  datas: Record<string, any>;
}

describe('ApiService', (): void => {
  let service: ApiService;
  const fakeDatas: FakeTestDatas = new FakeTestDatas();
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  describe('When everything work well', (): void => {
    beforeEach((): void => {
      httpClientSpy = jasmine.createSpyObj<HttpClient>('HttpClient', ['get', 'post', 'patch', 'put', 'delete']);
      httpClientSpy.get.and.returnValue(of({ statusCode: 200, datas: [] } as IDummyReponseTest));
      httpClientSpy.post.and.returnValue(
        of({
          statusCode: 201,
          datas: { message: 'created' },
        } as IDummyReponseTest),
      );
      httpClientSpy.patch.and.returnValue(
        of({
          statusCode: 200,
          datas: { message: 'updated' },
        } as IDummyReponseTest),
      );
      httpClientSpy.put.and.returnValue(
        of({
          statusCode: 200,
          datas: { message: 'updated' },
        } as IDummyReponseTest),
      );
      httpClientSpy.delete.and.returnValue(of({ statusCode: 200, datas: { deleted: true } } as IDummyReponseTest));

      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
          {
            provide: HttpClient,
            useValue: httpClientSpy,
          },
        ],
      });
      service = TestBed.inject(ApiService);
    });

    it('should be created', (): void => {
      expect(service).toBeTruthy();
    });

    it('should get datas from remote', (): void => {
      service.get<IDummyReponseTest>(fakeDatas.fakeUrl).subscribe(testSuccessFulResponse(200, Array));
    });

    it('should post datas to remote', (): void => {
      service.post<IDummyReponseTest>(fakeDatas.fakeUrl, {}).subscribe(testSuccessFulResponse(201, Object));
    });

    it('should patch datas to remote', (): void => {
      service.patch<IDummyReponseTest>(fakeDatas.fakeUrl, {}).subscribe(testSuccessFulResponse(200, Object));
    });

    it('should put datas to remote', (): void => {
      service.put<IDummyReponseTest>(fakeDatas.fakeUrl, {}).subscribe(testSuccessFulResponse(200, Object));
    });

    it('should remove datas to remote', (): void => {
      service.remove<IDummyReponseTest>(fakeDatas.fakeUrl).subscribe(testSuccessFulResponse(200, Object));
    });

    it('should upload file to database', (): void => {
      httpClientSpy.post.and.returnValue(of({ type: HttpEventType.Sent }));
      service.upload<IDummyReponseTest>(fakeDatas.fakeUrl, new FormData()).subscribe({
        next: (response: HttpEvent<IDummyReponseTest>): void => {
          expect(response.type).toBe(HttpEventType.Sent);
        },
      });
    });
  });

  describe('When everything fail', (): void => {
    describe('Case: user is unauthorized', (): void => {
      beforeEach((): void => {
        const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'patch', 'put', 'delete']);
        const unAuthorizedError: ErrorResponseModel = ErrorResponseModel.fromJson(fakeDatas.fakeUnAuthorizedResponse);

        httpClientSpy.get.and.returnValue(throwError((): ErrorResponseModel => unAuthorizedError));
        httpClientSpy.post.and.returnValue(throwError((): ErrorResponseModel => unAuthorizedError));
        httpClientSpy.patch.and.returnValue(throwError((): ErrorResponseModel => unAuthorizedError));
        httpClientSpy.put.and.returnValue(throwError((): ErrorResponseModel => unAuthorizedError));
        httpClientSpy.delete.and.returnValue(throwError((): ErrorResponseModel => unAuthorizedError));

        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [
            {
              provide: HttpClient,
              useValue: httpClientSpy,
            },
          ],
        });
        service = TestBed.inject(ApiService);
      });

      it('should get an UnauthorizedException when we try to get datas', (): void => {
        service.get<IDummyReponseTest>(fakeDatas.fakeUrl).subscribe(testCaseUnAuthorizedResponse());
      });

      it('should get an UnauthorizedException when we try to post one data', (): void => {
        service.post<IDummyReponseTest>(fakeDatas.fakeUrl, new FormData()).subscribe(testCaseUnAuthorizedResponse());
      });

      it('should get an UnauthorizedException when we try to patch one data', (): void => {
        service.patch<IDummyReponseTest>(fakeDatas.fakeUrl, new FormData()).subscribe(testCaseUnAuthorizedResponse());
      });

      it('should get an UnauthorizedException when we try to put one data', (): void => {
        service.put<IDummyReponseTest>(fakeDatas.fakeUrl, new FormData()).subscribe(testCaseUnAuthorizedResponse());
      });

      it('should get an UnauthorizedException when we try to delete one data', (): void => {
        service.remove<IDummyReponseTest>(fakeDatas.fakeUrl).subscribe(testCaseUnAuthorizedResponse());
      });
    });

    describe('Case: user is forbidden', (): void => {
      beforeEach((): void => {
        const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'patch', 'put', 'delete']);
        const forbiddenError: ErrorResponseModel = ErrorResponseModel.fromJson(fakeDatas.fakeUnForbiddenResponse);

        httpClientSpy.get.and.returnValue(throwError((): ErrorResponseModel => forbiddenError));
        httpClientSpy.post.and.returnValue(throwError((): ErrorResponseModel => forbiddenError));
        httpClientSpy.patch.and.returnValue(throwError((): ErrorResponseModel => forbiddenError));
        httpClientSpy.put.and.returnValue(throwError((): ErrorResponseModel => forbiddenError));
        httpClientSpy.delete.and.returnValue(throwError((): ErrorResponseModel => forbiddenError));

        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [
            {
              provide: HttpClient,
              useValue: httpClientSpy,
            },
          ],
        });
        service = TestBed.inject(ApiService);
      });

      it('should get a ForbiddenException when we try to get datas', (): void => {
        service.get<IDummyReponseTest>(fakeDatas.fakeUrl).subscribe(testCaseForbiddenResponse());
      });

      it('should get a ForbiddenException when we try to post one data', (): void => {
        service.post<IDummyReponseTest>(fakeDatas.fakeUrl, new FormData()).subscribe(testCaseForbiddenResponse());
      });

      it('should get a ForbiddenException when we try to patch one data', (): void => {
        service.patch<IDummyReponseTest>(fakeDatas.fakeUrl, new FormData()).subscribe(testCaseForbiddenResponse());
      });

      it('should get a ForbiddenException when we try to put one data', (): void => {
        service.put<IDummyReponseTest>(fakeDatas.fakeUrl, new FormData()).subscribe(testCaseForbiddenResponse());
      });

      it('should get a ForbiddenException when we try to delete one data', (): void => {
        service.remove<IDummyReponseTest>(fakeDatas.fakeUrl).subscribe(testCaseForbiddenResponse());
      });
    });

    describe('Case: resource not found', (): void => {
      beforeEach((): void => {
        const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'patch', 'put', 'delete']);
        const notFoundError: ErrorResponseModel = ErrorResponseModel.fromJson(fakeDatas.fakeNotFoundResponse);

        httpClientSpy.get.and.returnValue(throwError((): ErrorResponseModel => notFoundError));
        httpClientSpy.post.and.returnValue(throwError((): ErrorResponseModel => notFoundError));
        httpClientSpy.patch.and.returnValue(throwError((): ErrorResponseModel => notFoundError));
        httpClientSpy.put.and.returnValue(throwError((): ErrorResponseModel => notFoundError));
        httpClientSpy.delete.and.returnValue(throwError((): ErrorResponseModel => notFoundError));

        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule],
          providers: [
            {
              provide: HttpClient,
              useValue: httpClientSpy,
            },
          ],
        });
        service = TestBed.inject(ApiService);
      });

      it('should ge aForbiddenException NotFoundException when we try to get datas', (): void => {
        service.get<IDummyReponseTest>(fakeDatas.fakeUrl).subscribe(testCaseNotFoundResponse());
      });

      it('should ge aForbiddenException NotFoundException when we try to post one data', (): void => {
        service.post<IDummyReponseTest>(fakeDatas.fakeUrl, new FormData()).subscribe(testCaseNotFoundResponse());
      });

      it('should ge aForbiddenException NotFoundException when we try to patch one data', (): void => {
        service.patch<IDummyReponseTest>(fakeDatas.fakeUrl, new FormData()).subscribe(testCaseNotFoundResponse());
      });

      it('should ge aForbiddenException NotFoundException when we try to put one data', (): void => {
        service.put<IDummyReponseTest>(fakeDatas.fakeUrl, new FormData()).subscribe(testCaseNotFoundResponse());
      });

      it('should ge aForbiddenException NotFoundException when we try to delete one data', (): void => {
        service.remove<IDummyReponseTest>(fakeDatas.fakeUrl).subscribe(testCaseNotFoundResponse());
      });
    });
  });
});

/**
 * StatusCode: 200
 * @param statusCode
 * @param type
 * @example ```ts
 * {
 *     next: (response: IDummyReponseTest): void => {
 *       expect(response.statusCode).toBe(statusCode);
 *       expect(response.datas).toBeInstanceOf(type);
 *     },
 *   }
 * ```
 */
function testSuccessFulResponse(statusCode: number, type: any): { next: (response: IDummyReponseTest) => void } {
  return {
    next: (response: IDummyReponseTest): void => {
      expect(response.statusCode).toBe(statusCode);
      expect(response.datas).toBeInstanceOf(type);
    },
  };
}

/**
 * Status: 401
 * @example ```ts
 * {
 *     error: (error: ErrorResponseModel): void => {
 *       expect(error).toBeInstanceOf(ErrorResponseModel);
 *       expect(error.statusCode).toBe(401);
 *       expect(error.errorName).toBe('UnauthorizedException');
 *       expect(error.description.statusCode).toBe(401);
 *       expect(error.description.message).toBe('Unauthorized');
 *       expect(error.path).toBe('/my-endpoint');
 *       expect(error.date).toBe('2023-07-01T23:01:01.333Z');
 *     },
 *   }
 * ```
 */
function testCaseUnAuthorizedResponse(): {
  error: (error: ErrorResponseModel) => void;
} {
  return {
    error: (error: ErrorResponseModel): void => {
      expect(error).toBeInstanceOf(ErrorResponseModel);
      expect(error.statusCode).toBe(401);
      expect(error.errorName).toBe('UnauthorizedException');
      expect(error.description.statusCode).toBe(401);
      expect(error.description.message).toBe('Unauthorized');
      expect(error.path).toBe('/my-endpoint');
      expect(error.date).toBe('2023-07-01T23:01:01.333Z');
    },
  };
}

/**
 * Status: 403
 * @example ```ts
 * {
 *     error: (error: ErrorResponseModel): void => {
 *       expect(error).toBeInstanceOf(ErrorResponseModel);
 *       expect(error.statusCode).toBe(403);
 *       expect(error.errorName).toBe('ForbiddenException');
 *       expect(error.description.statusCode).toBe(403);
 *       expect(error.description.message).toBe('Forbidden');
 *       expect(error.path).toBe('/my-endpoint');
 *       expect(error.date).toBe('2023-07-01T23:01:01.333Z');
 *     },
 *   }
 * ```
 */
function testCaseForbiddenResponse(): {
  error: (error: ErrorResponseModel) => void;
} {
  return {
    error: (error: ErrorResponseModel): void => {
      expect(error).toBeInstanceOf(ErrorResponseModel);
      expect(error.statusCode).toBe(403);
      expect(error.errorName).toBe('ForbiddenException');
      expect(error.description.statusCode).toBe(403);
      expect(error.description.message).toBe('Forbidden');
      expect(error.path).toBe('/my-endpoint');
      expect(error.date).toBe('2023-07-01T23:01:01.333Z');
    },
  };
}

/**
 * Status: 404
 * @example ```ts
 * {
 *     error: (error: ErrorResponseModel): void => {
 *       expect(error).toBeInstanceOf(ErrorResponseModel);
 *       expect(error.statusCode).toBe(404);
 *       expect(error.errorName).toBe('NotFoundException');
 *       expect(error.description.statusCode).toBe(404);
 *       expect(error.description.message).toBe('NotFound');
 *       expect(error.path).toBe('/my-endpoint');
 *       expect(error.date).toBe('2023-07-01T23:01:01.333Z');
 *     },
 *   }
 * ```
 */
function testCaseNotFoundResponse(): {
  error: (error: ErrorResponseModel) => void;
} {
  return {
    error: (error: ErrorResponseModel): void => {
      expect(error).toBeInstanceOf(ErrorResponseModel);
      expect(error.statusCode).toBe(404);
      expect(error.errorName).toBe('NotFoundException');
      expect(error.description.statusCode).toBe(404);
      expect(error.description.message).toBe('NotFound');
      expect(error.path).toBe('/my-endpoint');
      expect(error.date).toBe('2023-07-01T23:01:01.333Z');
    },
  };
}
