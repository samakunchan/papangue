import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';

@Component({
  selector: 'app-section-stats',
  templateUrl: './section-stats.component.html',
  styleUrls: ['./section-stats.component.scss'],
})
export class SectionStatsComponent {
  @Input('section') section!: ISection;
}
