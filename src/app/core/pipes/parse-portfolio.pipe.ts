import { Pipe, PipeTransform } from '@angular/core';
import { IConfPortfolio } from '../interfaces/section.interface';

@Pipe({
  name: 'parsePortfolio',
  standalone: true,
})
export class ParsePortfolioPipe implements PipeTransform {
  transform(content: string): IConfPortfolio {
    return JSON.parse(content) as IConfPortfolio;
  }
}
