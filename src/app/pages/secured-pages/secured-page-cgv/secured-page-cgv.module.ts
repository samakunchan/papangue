import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuredPageCgvComponent } from './secured-page-cgv.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SecuredPageCgvComponent }];

@NgModule({
  declarations: [SecuredPageCgvComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecuredPageCgvModule {}
