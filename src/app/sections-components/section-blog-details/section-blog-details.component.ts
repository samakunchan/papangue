import { Component, Input } from '@angular/core';
import { IConfBlog } from '../../core/interfaces/section.interface';

@Component({
  selector: 'app-section-blog-details',
  templateUrl: './section-blog-details.component.html',
  styleUrls: ['./section-blog-details.component.scss'],
})
export class SectionBlogDetailsComponent {
  @Input('blog') blog!: IConfBlog;
}
