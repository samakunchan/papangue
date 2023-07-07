import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouteName } from '../../core/utils/config.core';

@Component({
  selector: 'app-secured-pages',
  templateUrl: './secured-pages.component.html',
  styleUrls: ['./secured-pages.component.scss'],
})
export class SecuredPagesComponent {
  menus: string[] = [
    RouteName.dashboard,
    RouteName.about,
    RouteName.blog.split('-').reverse()[0],
    RouteName.cgv,
    RouteName.documents,
    RouteName.environments,
    RouteName.portfolio.split('-').reverse()[0],
    RouteName.services.split('-').reverse()[0],
  ] as string[];

  constructor(private router: Router) {}

  toNavigateMenu(menu: string = ''): void {
    this.router.navigate([RouteName.admin, menu]).then();
  }
}
