import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAboutComponent } from './page-about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PageAboutComponent }];

@NgModule({
  declarations: [PageAboutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PageAboutModule {}
