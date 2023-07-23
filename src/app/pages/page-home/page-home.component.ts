import { Component, OnInit } from '@angular/core';
import { DatasService } from '../../core/services/datas.service';
import { filter, map, Observable } from 'rxjs';
import { IResponseApi } from '../../core/interfaces/response-api.interface';
import { ISection, SectionName } from '../../core/interfaces/section.interface';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
  protected readonly SectionName = SectionName;
  sections$: Observable<ISection[]> = new Observable<ISection[]>();

  constructor(private datasService: DatasService) {}

  ngOnInit(): void {
    this.datasService.loadDatasPages().subscribe();

    this.sections$ = this.datasService.datasResult$.pipe(filter(this.passIfWeHaveHomeDatas), map(this.getHomeSectionsDatas));
  }

  private getHomeSectionsDatas(response: IResponseApi): ISection[] {
    return response.datasJson!['home'] as ISection[];
  }

  private passIfWeHaveHomeDatas(response: IResponseApi): boolean {
    return response.datasJson != null && response.datasJson.hasOwnProperty('home');
  }
}
