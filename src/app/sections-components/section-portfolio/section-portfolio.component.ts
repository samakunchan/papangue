import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.scss'],
})
export class SectionPortfolioComponent {
  @Input('section') section!: ISection;
}
