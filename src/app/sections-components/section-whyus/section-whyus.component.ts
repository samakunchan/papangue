import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';
import { environment } from '../../../environments/environment';
import { getRelativePath } from '../../core/utils/path-image';

@Component({
  selector: 'app-section-whyus',
  templateUrl: './section-whyus.component.html',
  styleUrls: ['./section-whyus.component.scss'],
})
export class SectionWhyusComponent {
  @Input('section') section!: ISection;
  protected readonly environment = environment;
  protected readonly getRelativePath = getRelativePath;
}
