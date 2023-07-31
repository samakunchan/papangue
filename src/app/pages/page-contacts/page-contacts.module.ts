import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContactsComponent } from './page-contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponentsModule } from '../../sections-components/sections-components.module';

const routes: Routes = [{ path: '', component: PageContactsComponent }];

@NgModule({
  declarations: [PageContactsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SectionsComponentsModule],
})
export class PageContactsModule {}
