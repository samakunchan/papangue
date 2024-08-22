import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PageServicesComponent } from './page-services.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', component: PageServicesComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), NgOptimizedImage, PageServicesComponent],
})
export class PageServicesModule {}
