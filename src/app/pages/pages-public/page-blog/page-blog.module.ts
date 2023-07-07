import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageBlogComponent } from './page-blog.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: PageBlogComponent }];

@NgModule({
  declarations: [PageBlogComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PageBlogModule {}
