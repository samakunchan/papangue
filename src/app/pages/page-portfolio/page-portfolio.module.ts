import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PagePortfolioComponent } from './page-portfolio.component';
import { RouterModule, Routes } from '@angular/router';

import { PagePortfolioDetailsComponent } from '../page-portfolio-details/page-portfolio-details.component';


const routes: Routes = [
  {
    path: '',
    component: PagePortfolioComponent,
  },
  { path: ':slug', component: PagePortfolioDetailsComponent },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), NgOptimizedImage, PagePortfolioComponent, PagePortfolioDetailsComponent],
})
export class PagePortfolioModule {}
