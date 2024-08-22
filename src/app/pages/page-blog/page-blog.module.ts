import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PageBlogComponent } from './page-blog.component';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponentsModule } from '../../sections-components/sections-components.module';
import { PageBlogDetailsComponent } from '../page-blog-details/page-blog-details.component';
import { PipesModule } from '../../core/pipes/pipes.module';

const routes: Routes = [
  { path: '', component: PageBlogComponent },
  { path: ':slug', component: PageBlogDetailsComponent },
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), SectionsComponentsModule, NgOptimizedImage, PipesModule, PageBlogComponent, PageBlogDetailsComponent],
})
export class PageBlogModule {}
