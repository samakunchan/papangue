import { Routes } from '@angular/router';

export const appPortfolioRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/page-portfolio/page-portfolio.component').then((m) => m.PagePortfolioComponent),
  },
  {
    path: ':slug',
    loadComponent: () =>
      import('./pages/page-portfolio-details/page-portfolio-details.component').then((m) => m.PagePortfolioDetailsComponent),
  },
];
