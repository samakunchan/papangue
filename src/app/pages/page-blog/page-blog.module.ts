import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PageBlogComponent } from './page-blog.component';
import { RouterModule, Routes } from '@angular/router';

import { PageBlogDetailsComponent } from '../page-blog-details/page-blog-details.component';


const routes: Routes = [
  { path: '', component: PageBlogComponent },
  { path: ':slug', component: PageBlogDetailsComponent },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), NgOptimizedImage, PageBlogComponent, PageBlogDetailsComponent],
})
export class PageBlogModule {}
