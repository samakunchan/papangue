import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';

@Component({
  selector: 'app-section-call-to-action',
  templateUrl: './section-call-to-action.component.html',
  styleUrls: ['./section-call-to-action.component.scss'],
})
export class SectionCallToActionComponent {
  @Input('section') section!: ISection;
}
