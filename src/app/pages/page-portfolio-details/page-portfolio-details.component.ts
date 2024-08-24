import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { IPicture, ISection, IValue, SectionName } from '../../core/interfaces/section.interface';
import { DatasService } from '../../core/services/datas.service';
import { IResponseApi } from '../../core/interfaces/response-api.interface';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { getRelativePath } from '../../core/utils/path-image';
import { NgIf, NgOptimizedImage, AsyncPipe } from '@angular/common';
import { SectionPortfolioDetailsComponent } from '../../sections-components/section-portfolio-details/section-portfolio-details.component';
import { ParsePortfolioPipe } from '../../core/pipes/parse-portfolio.pipe';

@Component({
  selector: 'app-page-portfolio-details',
  templateUrl: './page-portfolio-details.component.html',
  styleUrls: ['./page-portfolio-details.component.scss'],
  standalone: true,
  imports: [NgIf, NgOptimizedImage, SectionPortfolioDetailsComponent, AsyncPipe, ParsePortfolioPipe],
})
export class PagePortfolioDetailsComponent implements OnInit {
  protected readonly SectionName = SectionName;
  slug: string = '';
  imageDetail: IPicture | null | undefined = {} as IPicture;
  value$: Observable<string | undefined> = new Observable<string | undefined>();

  constructor(private datasService: DatasService, private route: ActivatedRoute) {
    this.slug = this.route.snapshot.params['slug'];
  }

  ngOnInit(): void {
    this.value$ = this.datasService.datasResult$.pipe(
      filter((loaded: IResponseApi): boolean => !!loaded.datas),
      map((response: IResponseApi) => {
        return this.getProjectSectionsDatas(response, this.slug);
      }),
    );
  }

  private getProjectSectionsDatas(response: IResponseApi, slug: string): string | undefined {
    return ((response.datas![SectionName.project] as ISection[]) ?? (response.datas![SectionName.home] as ISection[])) /// home ou project. Projet en 1, sinon home
      .find((section: ISection): boolean => section.uname === SectionName.project)
      ?.payload?.values.find((value: string): boolean => {
        const data: IValue = JSON.parse(value) as IValue;
        this.imageDetail = data.picture;
        return data.slug === slug;
      });
  }

  protected readonly environment = environment;
  protected readonly getRelativePath = getRelativePath;
}
