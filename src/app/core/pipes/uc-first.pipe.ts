import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucFirst',
})
export class UcFirstPipe implements PipeTransform {
  transform(text: string): string {
    return text
      .split('')
      .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
      .join('');
  }
}
