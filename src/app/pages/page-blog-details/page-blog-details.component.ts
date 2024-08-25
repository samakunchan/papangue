import { Component, OnInit } from '@angular/core';
import { IPicture, ISection, IValue, SectionName } from '../../core/interfaces/section.interface';
import { filter, map, Observable } from 'rxjs';
import { DatasService } from '../../core/services/datas.service';
import { ActivatedRoute } from '@angular/router';
import { IResponseApi } from '../../core/interfaces/response-api.interface';
import { AsyncPipe, NgIf, NgOptimizedImage } from '@angular/common';
import { SectionBlogDetailsComponent } from '../../sections-components/section-blog-details/section-blog-details.component';
import { ParseBlogPipe } from '../../core/pipes/parse-blog.pipe';

@Component({
  selector: 'app-page-blog-details',
  templateUrl: './page-blog-details.component.html',
  styleUrls: ['./page-blog-details.component.scss'],
  standalone: true,
  imports: [NgIf, NgOptimizedImage, SectionBlogDetailsComponent, AsyncPipe, ParseBlogPipe],
})
export class PageBlogDetailsComponent implements OnInit {
  protected readonly SectionName = SectionName;
  slug: string = '';
  imageDetail: IPicture | null | undefined = {} as IPicture;
  value$: Observable<string> = new Observable<string>();

  constructor(private datasService: DatasService, private route: ActivatedRoute) {
    this.slug = this.route.snapshot.params['slug'];
  }

  ngOnInit(): void {
    this.value$ = this.datasService.datasResult$.pipe(
      filter((loaded: IResponseApi): boolean => !!loaded.datas),
      map((response: IResponseApi) => this.getHomeSectionsDatas(response, this.slug)),
    );
  }

  private getHomeSectionsDatas(response: IResponseApi, slug: string): string {
    return (
      ((response.datas![SectionName.blog] as ISection[]) ?? (response.datas![SectionName.home] as ISection[]))
        .find((section: ISection): boolean => section.uname === SectionName.blog)
        ?.payload?.values.find((value: string): boolean => {
          const data: IValue = JSON.parse(value) as IValue;
          this.imageDetail = data.picture;
          return data.slug === slug;
        }) ?? ''
    );
  }
}
