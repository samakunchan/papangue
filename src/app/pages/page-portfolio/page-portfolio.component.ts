import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { ISection, SectionName } from '../../core/interfaces/section.interface';
import { DatasService } from '../../core/services/datas.service';
import { IResponseApi } from '../../core/interfaces/response-api.interface';
import { AsyncPipe, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { SectionPortfolioComponent } from '../../sections-components/section-portfolio/section-portfolio.component';

@Component({
  selector: 'app-page-portfolio',
  templateUrl: './page-portfolio.component.html',
  styleUrls: ['./page-portfolio.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage, NgIf, NgFor, SectionPortfolioComponent, AsyncPipe],
})
export class PagePortfolioComponent implements OnInit {
  protected readonly SectionName = SectionName;
  sections$: Observable<ISection[]> = new Observable<ISection[]>();

  constructor(private datasService: DatasService) {}

  ngOnInit(): void {
    this.sections$ = this.datasService.datasResult$.pipe(filter(this.passIfWeHaveHomeDatas), map(this.getHomeSectionsDatas));
  }

  private getHomeSectionsDatas(response: IResponseApi): ISection[] {
    return response.datas![SectionName.project] as ISection[];
  }

  private passIfWeHaveHomeDatas(response: IResponseApi): boolean {
    return response.datas != null && response.datas.hasOwnProperty(SectionName.project);
  }
}
