import { TestBed } from '@angular/core/testing';

import { DatasService } from './datas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DatasService', (): void => {
  let service: DatasService;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DatasService);
  });

  it('should be created', (): void => {
    expect(service).toBeTruthy();
  });
});
