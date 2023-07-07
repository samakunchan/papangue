import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuredPageDashboardComponent } from './secured-page-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SecuredPageDashboardComponent }];

@NgModule({
  declarations: [SecuredPageDashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecuredPageDashboardModule {}
