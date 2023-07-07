import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuredPagePortfolioComponent } from './secured-page-portfolio.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SecuredPagePortfolioComponent }];

@NgModule({
  declarations: [SecuredPagePortfolioComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecuredPagePortfolioModule {}
