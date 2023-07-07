import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuredPageDocumentsComponent } from './secured-page-documents.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SecuredPageDocumentsComponent }];

@NgModule({
  declarations: [SecuredPageDocumentsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecuredPageDocumentsModule {}
