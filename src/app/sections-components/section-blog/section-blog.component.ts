import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';

@Component({
  selector: 'app-section-blog',
  templateUrl: './section-blog.component.html',
  styleUrls: ['./section-blog.component.scss'],
})
export class SectionBlogComponent {
  @Input('section') section!: ISection;
}
