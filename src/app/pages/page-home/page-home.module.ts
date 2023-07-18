import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PageHomeComponent }];

@NgModule({
  declarations: [PageHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PageHomeModule {}
