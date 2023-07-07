import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-public',
  templateUrl: './pages-public.component.html',
  styleUrls: ['./pages-public.component.scss'],
})
export class PagesPublicComponent {
  menus: string[] = ['a-propos-de-moi', 'mes-services', 'mon-portfolio', 'mon-blog'] as string[];

  constructor(private router: Router) {}

  toNavigateMenu(menu: string = ''): void {
    this.router.navigate([menu]).then();
  }
}
