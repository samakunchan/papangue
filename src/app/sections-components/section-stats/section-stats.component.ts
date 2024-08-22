import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';
import { environment } from '../../../environments/environment';
import { getRelativePath } from '../../core/utils/path-image';
import { NgIf, NgFor, NgOptimizedImage } from '@angular/common';
import { ParseStatsPipe } from '../../core/pipes/parse-stats.pipe';

@Component({
    selector: 'app-section-stats',
    templateUrl: './section-stats.component.html',
    styleUrls: ['./section-stats.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        NgOptimizedImage,
        ParseStatsPipe,
    ],
})
export class SectionStatsComponent {
  @Input('section') section!: ISection;
  protected readonly environment = environment;
  protected readonly getRelativePath = getRelativePath;
}
