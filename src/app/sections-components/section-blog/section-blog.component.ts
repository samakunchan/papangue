import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';
import { RouteName } from '../../core/utils/config.core';
import { environment } from '../../../environments/environment';
import { getRelativePath } from '../../core/utils/path-image';
import { NgIf, NgFor, NgOptimizedImage, TitleCasePipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LimitPipe } from '../../core/pipes/limit.pipe';
import { ParseBlogPipe } from '../../core/pipes/parse-blog.pipe';

@Component({
    selector: 'app-section-blog',
    templateUrl: './section-blog.component.html',
    styleUrls: ['./section-blog.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        NgOptimizedImage,
        RouterLink,
        TitleCasePipe,
        DatePipe,
        LimitPipe,
        ParseBlogPipe,
    ],
})
export class SectionBlogComponent {
  @Input('section') section!: ISection;
  @Input('isFullPage') isFullPage: boolean = false;
  @Input('limit') limit: number = -1;
  protected readonly RouteName = RouteName;
  protected readonly environment = environment;
  protected readonly getRelativePath = getRelativePath;
}
