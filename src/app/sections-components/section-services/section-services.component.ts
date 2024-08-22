import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';
import { NgFor, NgIf } from '@angular/common';
import { ParseServicePipe } from '../../core/pipes/parse-service.pipe';

@Component({
    selector: 'app-section-services',
    templateUrl: './section-services.component.html',
    styleUrls: ['./section-services.component.scss'],
    standalone: true,
    imports: [
        NgFor,
        NgIf,
        ParseServicePipe,
    ],
})
export class SectionServicesComponent {
  @Input('section') section!: ISection;
}
