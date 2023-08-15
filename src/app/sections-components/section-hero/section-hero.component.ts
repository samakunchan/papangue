import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';
import { RouteName } from '../../core/utils/config.core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.scss'],
})
export class SectionHeroComponent {
  @Input('section') section!: ISection;
  protected readonly RouteName = RouteName;
  protected readonly environment = environment;
}
