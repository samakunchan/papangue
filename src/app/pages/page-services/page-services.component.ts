import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { ISection, SectionName } from '../../core/interfaces/section.interface';
import { DatasService } from '../../core/services/datas.service';
import { IResponseApi } from '../../core/interfaces/response-api.interface';

@Component({
  selector: 'app-page-services',
  templateUrl: './page-services.component.html',
  styleUrls: ['./page-services.component.scss'],
})
export class PageServicesComponent implements OnInit {
  protected readonly SectionName = SectionName;
  sections$: Observable<ISection[]> = new Observable<ISection[]>();

  constructor(private datasService: DatasService) {}

  ngOnInit(): void {
    this.sections$ = this.datasService.datasResult$.pipe(filter(this.passIfWeHaveHomeDatas), map(this.getHomeSectionsDatas));
  }

  private getHomeSectionsDatas(response: IResponseApi): ISection[] {
    return response.datas!['services'] as ISection[];
  }

  private passIfWeHaveHomeDatas(response: IResponseApi): boolean {
    return response.datas != null && response.datas.hasOwnProperty('services');
  }
}
