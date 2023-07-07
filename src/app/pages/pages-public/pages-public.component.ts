import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteName } from '../../core/utils/config.core';

@Component({
  selector: 'app-pages-public',
  templateUrl: './pages-public.component.html',
  styleUrls: ['./pages-public.component.scss'],
})
export class PagesPublicComponent {
  menus: string[] = [RouteName.about, RouteName.services, RouteName.portfolio, RouteName.blog] as string[];

  constructor(private router: Router) {}

  toNavigateMenu(menu: string = ''): void {
    this.router.navigate([menu]).then();
  }
}
