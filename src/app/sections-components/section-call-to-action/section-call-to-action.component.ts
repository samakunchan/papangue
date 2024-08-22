import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';
import { NgIf, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-section-call-to-action',
    templateUrl: './section-call-to-action.component.html',
    styleUrls: ['./section-call-to-action.component.scss'],
    standalone: true,
    imports: [
        NgIf,
        NgFor,
        RouterLink,
    ],
})
export class SectionCallToActionComponent {
  @Input('section') section!: ISection;
}
