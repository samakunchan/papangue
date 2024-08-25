import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
  standalone: true,
})
export class FilterByPipe implements PipeTransform {
  transform(elements: string[], property: string, filter: string): string[] {
    return filter === '*' ? elements : elements.filter((element: string): boolean => JSON.parse(element)[property] === filter);
  }
}
