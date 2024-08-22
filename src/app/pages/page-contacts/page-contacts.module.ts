import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageContactsComponent } from './page-contacts.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: PageContactsComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), PageContactsComponent],
})
export class PageContactsModule {}
