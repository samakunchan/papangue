import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PagePortfolioComponent } from './page-portfolio.component';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponentsModule } from '../../sections-components/sections-components.module';
import { PagePortfolioDetailsComponent } from '../page-portfolio-details/page-portfolio-details.component';
import { PipesModule } from '../../core/pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: PagePortfolioComponent,
  },
  { path: ':slug', component: PagePortfolioDetailsComponent },
];

@NgModule({
  declarations: [PagePortfolioComponent, PagePortfolioDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SectionsComponentsModule, NgOptimizedImage, PipesModule],
})
export class PagePortfolioModule {}
