import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponentsModule } from '../../sections-components/sections-components.module';

const routes: Routes = [{ path: '', component: PageHomeComponent }];

@NgModule({
  declarations: [PageHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SectionsComponentsModule],
})
export class PageHomeModule {}
