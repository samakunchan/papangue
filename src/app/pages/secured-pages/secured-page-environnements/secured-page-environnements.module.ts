import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuredPageEnvironnementsComponent } from './secured-page-environnements.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SecuredPageEnvironnementsComponent }];

@NgModule({
  declarations: [SecuredPageEnvironnementsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecuredPageEnvironnementsModule {}
