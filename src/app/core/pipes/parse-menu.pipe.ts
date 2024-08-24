import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseMenu',
  standalone: true,
})
export class ParseMenuPipe implements PipeTransform {
  transform(menu: string): string {
    return menu.split('-').join(' ');
  }
}
