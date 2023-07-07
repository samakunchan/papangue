import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuredPageServicesComponent } from './secured-page-services.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SecuredPageServicesComponent }];

@NgModule({
  declarations: [SecuredPageServicesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecuredPageServicesModule {}
