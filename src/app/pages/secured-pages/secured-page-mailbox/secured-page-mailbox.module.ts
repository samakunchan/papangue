import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecuredPageMailboxComponent } from './secured-page-mailbox.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: SecuredPageMailboxComponent }];

@NgModule({
  declarations: [SecuredPageMailboxComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SecuredPageMailboxModule {}
