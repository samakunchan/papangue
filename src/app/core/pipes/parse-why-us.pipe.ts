import { Pipe, PipeTransform } from '@angular/core';
import { IValue } from '../interfaces/section.interface';

@Pipe({
  name: 'parseWhyUs',
  standalone: true,
})
export class ParseWhyUsPipe implements PipeTransform {
  transform(content: string): IValue {
    return JSON.parse(content) as IValue;
  }
}
