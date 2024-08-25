import { Pipe, PipeTransform } from '@angular/core';
import { IValue } from '../interfaces/section.interface';

@Pipe({
  name: 'parseService',
  standalone: true,
})
export class ParseServicePipe implements PipeTransform {
  transform(content: string): IValue {
    return JSON.parse(content) as IValue;
  }
}
