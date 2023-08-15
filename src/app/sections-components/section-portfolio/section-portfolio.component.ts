import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';
import { RouteName } from '../../core/utils/config.core';
import { transition, trigger } from '@angular/animations';
import { showElementWith300msDelay, startByHideElement } from '../../core/utils/animations';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.scss'],
  animations: [trigger('thumbState', [transition('void => *', [startByHideElement, showElementWith300msDelay])])],
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
}
