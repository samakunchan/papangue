import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PageServicesComponent } from './page-services.component';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponentsModule } from '../../sections-components/sections-components.module';

const routes: Routes = [{ path: '', component: PageServicesComponent }];

@NgModule({
  declarations: [PageServicesComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SectionsComponentsModule, NgOptimizedImage],
})
export class PageServicesModule {}
