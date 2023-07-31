import { Pipe, PipeTransform } from '@angular/core';
import { IConfPortfolio } from '../interfaces/section.interface';

@Pipe({
  name: 'groupCategory',
})
export class GroupCategoryPipe implements PipeTransform {
  transform(elements: string[]): string[] {
    return Object.keys(
      elements.reduce((r: any, a: string) => {
        const json: IConfPortfolio = JSON.parse(a) as IConfPortfolio;
        const categoryExtracted: string = json.category;
        r[categoryExtracted] = null;
        return r;
      }, {}),
    );
  }
}
