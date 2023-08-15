import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PipesModule } from '../core/pipes/pipes.module';
import { RouterModule, Routes } from '@angular/router';
import { RouteName } from '../core/utils/config.core';
import { SectionsComponentsModule } from '../sections-components/sections-components.module';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./page-home/page-home.module').then((m) => m.PageHomeModule),
      },
      {
        path: RouteName.about.value,
        loadChildren: () => import('./page-about/page-about.module').then((m) => m.PageAboutModule),
      },
      {
        path: RouteName.services.value,
        loadChildren: () => import('./page-services/page-services.module').then((m) => m.PageServicesModule),
      },
      {
        path: RouteName.projects.value,
        loadChildren: () => import('./page-portfolio/page-portfolio.module').then((m) => m.PagePortfolioModule),
      },
      {
        path: RouteName.blog.value,
        loadChildren: () => import('./page-blog/page-blog.module').then((m) => m.PageBlogModule),
      },
      {
        path: RouteName.contacts.value,
        loadChildren: () => import('./page-contacts/page-contacts.module').then((m) => m.PageContactsModule),
      },
    ],
  },
];

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PipesModule, RouterModule.forChild(routes), NgOptimizedImage, SectionsComponentsModule],
})
export class PagesModule {}
