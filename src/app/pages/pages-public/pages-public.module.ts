import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesPublicComponent } from './pages-public.component';
import { RouteName } from '../../core/utils/config.core';
import { PipesModule } from '../../core/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: PagesPublicComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./page-home/page-home.module').then((m) => m.PageHomeModule),
      },
      {
        path: RouteName.about,
        loadChildren: () => import('./page-about/page-about.module').then((m) => m.PageAboutModule),
      },
      {
        path: RouteName.services,
        loadChildren: () => import('./page-services/page-services.module').then((m) => m.PageServicesModule),
      },
      {
        path: RouteName.portfolio,
        loadChildren: () => import('./page-portfolio/page-portfolio.module').then((m) => m.PagePortfolioModule),
      },
      {
        path: RouteName.blog,
        loadChildren: () => import('./page-blog/page-blog.module').then((m) => m.PageBlogModule),
      },
    ],
  },
];

@NgModule({
  declarations: [PagesPublicComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PipesModule],
})
export class PagesPublicModule {}
