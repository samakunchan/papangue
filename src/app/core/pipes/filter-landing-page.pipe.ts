import { Pipe, PipeTransform } from '@angular/core';
import { IConfPortfolio } from '../interfaces/section.interface';

@Pipe({
  name: 'filterLandingPage',
  standalone: true,
})
export class FilterLandingPagePipe implements PipeTransform {
  transform(values: string[], ...args: unknown[]): string[] {
    return values.filter((value: string) => (JSON.parse(value) as IConfPortfolio).toLandingPage);
  }
}
