import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';
import { RouteName } from '../../core/utils/config.core';
import { transition, trigger } from '@angular/animations';
import { showElementWith300msDelay, startByHideElement } from '../../core/utils/animations';
import { environment } from '../../../environments/environment';
import { DatePipe, NgClass, NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ParsePortfolioPipe } from '../../core/pipes/parse-portfolio.pipe';
import { LimitPipe } from '../../core/pipes/limit.pipe';
import { FilterByPipe } from '../../core/pipes/filter-by.pipe';
import { GroupCategoryPipe } from '../../core/pipes/group-category.pipe';
import { getRelativePath } from '../../core/utils/path-image';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.scss'],
  animations: [trigger('thumbState', [transition('void => *', [startByHideElement, showElementWith300msDelay])])],
  standalone: true,
  imports: [NgIf, NgClass, NgFor, RouterLink, NgOptimizedImage, DatePipe, ParsePortfolioPipe, LimitPipe, FilterByPipe, GroupCategoryPipe],
})
export class SectionPortfolioComponent {
  @Input('section') section!: ISection;
  @Input('isFullPage') isFullPage: boolean = false;
  @Input('limit') limit: number = -1;
  protected readonly RouteName = RouteName;
  protected readonly environment = environment;
  filterSelected: string = '*';

  onFilter(category: string): void {
    this.filterSelected = category;
  }

  protected readonly getRelativePath = getRelativePath;
}
