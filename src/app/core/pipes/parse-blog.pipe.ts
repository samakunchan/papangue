import { Pipe, PipeTransform } from '@angular/core';
import { IConfBlog } from '../interfaces/section.interface';

@Pipe({
  name: 'parseBlog',
  standalone: true,
})
export class ParseBlogPipe implements PipeTransform {
  transform(content: string): IConfBlog {
    return JSON.parse(content) as IConfBlog;
  }
}
