import { Component, OnInit } from '@angular/core';
import { DatasService } from '../../core/services/datas.service';
import { filter, map, Observable } from 'rxjs';
import { IResponseApi } from '../../core/interfaces/response-api.interface';
import { ISection, SectionName } from '../../core/interfaces/section.interface';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { SectionHeroComponent } from '../../sections-components/section-hero/section-hero.component';
import { SectionServicesComponent } from '../../sections-components/section-services/section-services.component';
import { SectionWhyusComponent } from '../../sections-components/section-whyus/section-whyus.component';
import { SectionCallToActionComponent } from '../../sections-components/section-call-to-action/section-call-to-action.component';
import { SectionPortfolioComponent } from '../../sections-components/section-portfolio/section-portfolio.component';
import { SectionBlogComponent } from '../../sections-components/section-blog/section-blog.component';
import { SectionStatsComponent } from '../../sections-components/section-stats/section-stats.component';
import { SectionContactsComponent } from '../../sections-components/section-contacts/section-contacts.component';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    SectionHeroComponent,
    SectionServicesComponent,
    SectionWhyusComponent,
    SectionCallToActionComponent,
    SectionPortfolioComponent,
    SectionBlogComponent,
    SectionStatsComponent,
    SectionContactsComponent,
    AsyncPipe,
  ],
})
export class PageHomeComponent implements OnInit {
  protected readonly SectionName = SectionName;
  sections$: Observable<ISection[]> = new Observable<ISection[]>();

  constructor(private datasService: DatasService) {}

  ngOnInit(): void {
    this.sections$ = this.datasService.datasResult$.pipe(filter(this.passIfWeHaveHomeDatas), map(this.getHomeSectionsDatas));
  }

  private getHomeSectionsDatas(response: IResponseApi): ISection[] {
    return response.datas!['home'] as ISection[];
  }

  private passIfWeHaveHomeDatas(response: IResponseApi): boolean {
    return response.datas != null && response.datas.hasOwnProperty('home');
  }
}
