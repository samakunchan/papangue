import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section-stats',
  templateUrl: './section-stats.component.html',
  styleUrls: ['./section-stats.component.scss'],
})
export class SectionStatsComponent {
  @Input('section') section!: ISection;
  protected readonly environment = environment;
}
