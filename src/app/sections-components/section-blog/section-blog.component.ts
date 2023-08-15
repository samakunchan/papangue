import { Component, Input } from '@angular/core';
import { ISection } from '../../core/interfaces/section.interface';
import { RouteName } from '../../core/utils/config.core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-section-blog',
  templateUrl: './section-blog.component.html',
  styleUrls: ['./section-blog.component.scss'],
})
export class SectionBlogComponent {
  @Input('section') section!: ISection;
  @Input('isFullPage') isFullPage: boolean = false;
  @Input('limit') limit: number = -1;
  protected readonly RouteName = RouteName;
  protected readonly environment = environment;
}
