import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuredPagesComponent } from './secured-pages.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    component: SecuredPagesComponent,
    children: [
      {
        path: 'tableau-de-bord',
        loadChildren: () => import('./secured-page-dashboard/secured-page-dashboard.module').then((m) => m.SecuredPageDashboardModule),
      },
      {
        path: 'a-propos-de-moi',
        loadChildren: () => import('./secured-page-about/secured-page-about.module').then((m) => m.SecuredPageAboutModule),
      },
      {
        path: 'blog',
        loadChildren: () => import('./secured-page-blog/secured-page-blog.module').then((m) => m.SecuredPageBlogModule),
      },
      {
        path: 'cgv',
        loadChildren: () => import('./secured-page-cgv/secured-page-cgv.module').then((m) => m.SecuredPageCgvModule),
      },
      {
        path: 'bibliothèque',
        loadChildren: () => import('./secured-page-documents/secured-page-documents.module').then((m) => m.SecuredPageDocumentsModule),
      },
      {
        path: 'environnements',
        loadChildren: () =>
          import('./secured-page-environnements/secured-page-environnements.module').then((m) => m.SecuredPageEnvironnementsModule),
      },
      {
        path: 'portfolio',
        loadChildren: () => import('./secured-page-portfolio/secured-page-portfolio.module').then((m) => m.SecuredPagePortfolioModule),
      },
      {
        path: 'services',
        loadChildren: () => import('./secured-page-services/secured-page-services.module').then((m) => m.SecuredPageServicesModule),
      },
    ],
  },
];

@NgModule({
  declarations: [SecuredPagesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecuredPagesModule {}
