import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagePortfolioComponent } from './page-portfolio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PagePortfolioComponent }];

@NgModule({
  declarations: [PagePortfolioComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PagePortfolioModule {}
