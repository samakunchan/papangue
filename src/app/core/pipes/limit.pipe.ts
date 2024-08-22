import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limit',
    standalone: true,
})
export class LimitPipe implements PipeTransform {
  transform(values: string[], limit: number): string[] {
    return limit === -1 ? values : values.slice(0, limit);
  }
}
