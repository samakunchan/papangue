import { Component, Input } from '@angular/core';
import { IConfBlog } from '../../core/interfaces/section.interface';
import { environment } from '../../../environments/environment';
import { getRelativePath } from '../../core/utils/path-image';

@Component({
  selector: 'app-section-blog-details',
  templateUrl: './section-blog-details.component.html',
  styleUrls: ['./section-blog-details.component.scss'],
})
export class SectionBlogDetailsComponent {
  @Input('blog') blog!: IConfBlog;
  protected readonly environment = environment;
  protected readonly getRelativePath = getRelativePath;
}
