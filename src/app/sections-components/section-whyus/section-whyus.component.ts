import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';
import { environment } from '../../../environments/environment';
import { getRelativePath } from '../../core/utils/path-image';
import { NgIf, NgOptimizedImage, NgFor } from '@angular/common';
import { ParseWhyUsPipe } from '../../core/pipes/parse-why-us.pipe';

@Component({
    selector: 'app-section-whyus',
    templateUrl: './section-whyus.component.html',
    styleUrls: ['./section-whyus.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgOptimizedImage,
        NgFor,
        ParseWhyUsPipe,
    ],
})
export class SectionWhyusComponent {
  @Input('section') section!: ISection;
  protected readonly environment = environment;
  protected readonly getRelativePath = getRelativePath;
}
