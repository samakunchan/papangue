import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuredPageAboutComponent } from './secured-page-about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SecuredPageAboutComponent }];

@NgModule({
  declarations: [SecuredPageAboutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecuredPageAboutModule {}
