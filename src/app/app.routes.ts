import { Routes } from '@angular/router';
import { RouteName } from './core/utils/config.core';

/**
 * Lazy loading
 * Route public
 * Route authentifié
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/pages.component').then((m) => m.PagesComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/page-home/page-home.component').then((m) => m.PageHomeComponent),
      },
      {
        path: RouteName.about.value,
        loadComponent: () => import('./pages/page-about/page-about.component').then((m) => m.PageAboutComponent),
      },
      {
        path: RouteName.services.value,
        loadComponent: () => import('./pages/page-services/page-services.component').then((m) => m.PageServicesComponent),
      },
      {
        path: RouteName.projects.value,
        loadChildren: () => import('./app-portfolio-routes').then((m) => m.appPortfolioRoutes),
      },
      {
        path: RouteName.blog.value,
        loadChildren: () => import('./app-blog-routes').then((m) => m.appBlogRoutes),
      },
      {
        path: RouteName.contacts.value,
        loadComponent: () => import('./pages/page-contacts/page-contacts.component').then((m) => m.PageContactsComponent),
      },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
