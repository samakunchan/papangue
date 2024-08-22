import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';
import { RouteName } from '../../core/utils/config.core';
import { environment } from '../../../environments/environment';
import { getRelativePath } from '../../core/utils/path-image';
import { NgIf, NgFor, NgClass, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-hero',
    templateUrl: './section-hero.component.html',
    styleUrls: ['./section-hero.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        NgClass,
        RouterLink,
        NgOptimizedImage,
    ],
})
export class SectionHeroComponent {
  @Input('section') section!: ISection;
  protected readonly RouteName = RouteName;
  protected readonly environment = environment;
  protected readonly getRelativePath = getRelativePath;
}
