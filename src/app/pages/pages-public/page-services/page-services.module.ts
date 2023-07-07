import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageServicesComponent } from './page-services.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PageServicesComponent }];

@NgModule({
  declarations: [PageServicesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PageServicesModule {}
