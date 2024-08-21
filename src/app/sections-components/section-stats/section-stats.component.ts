import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';
import { environment } from '../../../environments/environment';
import { getRelativePath } from '../../core/utils/path-image';

@Component({
  selector: 'app-section-stats',
  templateUrl: './section-stats.component.html',
  styleUrls: ['./section-stats.component.scss'],
})
export class SectionStatsComponent {
  @Input('section') section!: ISection;
  protected readonly environment = environment;
  protected readonly getRelativePath = getRelativePath;
}
