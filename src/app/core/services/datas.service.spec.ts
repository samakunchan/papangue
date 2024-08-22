import { TestBed } from '@angular/core/testing';

import { DatasService } from './datas.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('DatasService', (): void => {
  let service: DatasService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(DatasService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
