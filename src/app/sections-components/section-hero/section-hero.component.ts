import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';

@Component({
  selector: 'app-section-hero',
  templateUrl: './section-hero.component.html',
  styleUrls: ['./section-hero.component.scss'],
})
export class SectionHeroComponent {
  @Input('section') section!: ISection;
}
