import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuredPageBlogComponent } from './secured-page-blog.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SecuredPageBlogComponent }];

@NgModule({
  declarations: [SecuredPageBlogComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecuredPageBlogModule {}
