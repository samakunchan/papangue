import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuredPagesComponent } from './secured-pages.component';
import { RouterModule, Routes } from '@angular/router';
import { RouteName } from '../../core/utils/config.core';

const routes: Routes = [
  {
    path: '',
    component: SecuredPagesComponent,
    children: [
      {
        path: RouteName.dashboard,
        loadChildren: () => import('./secured-page-dashboard/secured-page-dashboard.module').then((m) => m.SecuredPageDashboardModule),
      },
      {
        path: RouteName.about,
        loadChildren: () => import('./secured-page-about/secured-page-about.module').then((m) => m.SecuredPageAboutModule),
      },
      {
        path: RouteName.cgv,
        loadChildren: () => import('./secured-page-cgv/secured-page-cgv.module').then((m) => m.SecuredPageCgvModule),
      },
      {
        path: RouteName.documents,
        loadChildren: () => import('./secured-page-documents/secured-page-documents.module').then((m) => m.SecuredPageDocumentsModule),
      },
      {
        path: RouteName.environments,
        loadChildren: () =>
          import('./secured-page-environnements/secured-page-environnements.module').then((m) => m.SecuredPageEnvironnementsModule),
      },
      {
        path: RouteName.blog.split('-').reverse()[0],
        loadChildren: () => import('./secured-page-blog/secured-page-blog.module').then((m) => m.SecuredPageBlogModule),
      },
      {
        path: RouteName.portfolio.split('-').reverse()[0],
        loadChildren: () => import('./secured-page-portfolio/secured-page-portfolio.module').then((m) => m.SecuredPagePortfolioModule),
      },
      {
        path: RouteName.services.split('-').reverse()[0],
        loadChildren: () => import('./secured-page-services/secured-page-services.module').then((m) => m.SecuredPageServicesModule),
      },
      { path: '', redirectTo: RouteName.dashboard, pathMatch: 'full' },
      { path: '**', redirectTo: RouteName.dashboard, pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [SecuredPagesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecuredPagesModule {}
