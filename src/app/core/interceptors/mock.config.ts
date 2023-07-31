import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IResponseApi } from '../interfaces/response-api.interface';
import { FakesDatas } from './fakes-datas';

const noDatas = (): Observable<HttpResponse<IResponseApi>> => {
  return of(
    new HttpResponse({
      status: 200,
      body: {
        datas: '',
      },
    }),
  );
};

const getPages = (): Observable<HttpResponse<IResponseApi>> => {
  return of(
    new HttpResponse<IResponseApi>({
      status: 200,
      body: {
        datas: JSON.stringify({
          home: [
            FakesDatas.sectionHero,
            FakesDatas.sectionServices,
            FakesDatas.sectionWhyus,
            FakesDatas.sectionCallToAction1,
            FakesDatas.sectionPortfolio,
            FakesDatas.sectionBlog,
            FakesDatas.sectionContacts,
          ],
          about: [FakesDatas.sectionStats, FakesDatas.sectionWhyus, FakesDatas.sectionCallToAction2],
          services: [FakesDatas.sectionServices],
          portfolio: [FakesDatas.sectionPortfolio],
          blog: [FakesDatas.sectionBlog],
        }),
      },
    }),
  );
};

export const selectHandler = (request: HttpRequest<{ method: string }>): (() => Observable<HttpResponse<IResponseApi>>) => {
  switch (request.method) {
    case 'GET':
      return getPages;
    default:
      return noDatas;
  }
};
