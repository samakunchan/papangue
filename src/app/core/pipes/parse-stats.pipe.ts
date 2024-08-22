import { Pipe, PipeTransform } from '@angular/core';
import { ISkill } from '../interfaces/section.interface';

@Pipe({
    name: 'parseStats',
    standalone: true,
})
export class ParseStatsPipe implements PipeTransform {
  transform(content: string): ISkill {
    return JSON.parse(content) as ISkill;
  }
}
