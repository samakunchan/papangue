import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesPublicComponent } from './pages-public.component';

const routes: Routes = [
  {
    path: '',
    component: PagesPublicComponent,
    children: [
      { path: '', loadChildren: () => import('./page-home/page-home.module').then((m) => m.PageHomeModule) },
      { path: 'a-propos-de-moi', loadChildren: () => import('./page-about/page-about.module').then((m) => m.PageAboutModule) },
      { path: 'mes-services', loadChildren: () => import('./page-services/page-services.module').then((m) => m.PageServicesModule) },
      { path: 'mon-portfolio', loadChildren: () => import('./page-portfolio/page-portfolio.module').then((m) => m.PagePortfolioModule) },
      { path: 'mon-blog', loadChildren: () => import('./page-blog/page-blog.module').then((m) => m.PageBlogModule) },
    ],
  },
];
@NgModule({
  declarations: [PagesPublicComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagesPublicModule {}
