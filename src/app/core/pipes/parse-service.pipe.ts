import { Pipe, PipeTransform } from '@angular/core';
import { IValue } from '../interfaces/section.interface';

@Pipe({
  name: 'parseService',
})
export class ParseServicePipe implements PipeTransform {
  transform(content: string): IValue {
    return JSON.parse(content) as IValue;
  }
}
