import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBy',
  standalone: true,
})
export class FilterByPipe<T> implements PipeTransform {
  transform(elements: T[], property: string, filter: string): T[] {
    return filter === '*' ? elements : elements.filter((element: any): boolean => JSON.parse(element)[property] === filter);
  }
}
