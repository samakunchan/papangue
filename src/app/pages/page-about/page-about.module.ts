import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAboutComponent } from './page-about.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: PageAboutComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), PageAboutComponent],
})
export class PageAboutModule {}
