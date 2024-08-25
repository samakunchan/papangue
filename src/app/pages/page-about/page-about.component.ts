import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { ISection, SectionName } from '../../core/interfaces/section.interface';
import { DatasService } from '../../core/services/datas.service';
import { IResponseApi } from '../../core/interfaces/response-api.interface';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { SectionStatsComponent } from '../../sections-components/section-stats/section-stats.component';
import { SectionWhyusComponent } from '../../sections-components/section-whyus/section-whyus.component';
import { SectionCallToActionComponent } from '../../sections-components/section-call-to-action/section-call-to-action.component';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss'],
  standalone: true,
  imports: [RouterLink, NgIf, NgFor, SectionStatsComponent, SectionWhyusComponent, SectionCallToActionComponent, AsyncPipe],
})
export class PageAboutComponent implements OnInit {
  protected readonly SectionName = SectionName;
  sections$: Observable<ISection[]> = new Observable<ISection[]>();

  constructor(private datasService: DatasService) {}

  ngOnInit(): void {
    this.sections$ = this.datasService.datasResult$.pipe(filter(this.passIfWeHaveHomeDatas), map(this.getHomeSectionsDatas));
  }

  private getHomeSectionsDatas(response: IResponseApi): ISection[] {
    return response.datas![SectionName.about] as ISection[];
  }

  private passIfWeHaveHomeDatas(response: IResponseApi): boolean {
    return response.datas != null && response.datas.hasOwnProperty(SectionName.about);
  }
}
