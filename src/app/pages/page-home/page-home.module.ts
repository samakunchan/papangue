import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeComponent } from './page-home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: PageHomeComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), PageHomeComponent],
})
export class PageHomeModule {}
