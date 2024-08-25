import { Routes } from '@angular/router';

export const appBlogRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/page-blog/page-blog.component').then((m) => m.PageBlogComponent),
  },
  {
    path: ':slug',
    loadComponent: () => import('./pages/page-blog-details/page-blog-details.component').then((m) => m.PageBlogDetailsComponent),
  },
];
