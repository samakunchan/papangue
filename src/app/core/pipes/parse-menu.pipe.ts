import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseMenu',
})
export class ParseMenuPipe implements PipeTransform {
  transform(menu: string): string {
    return menu.split('-').join(' ');
  }
}
