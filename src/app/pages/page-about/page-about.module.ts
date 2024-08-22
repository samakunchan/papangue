import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAboutComponent } from './page-about.component';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponentsModule } from '../../sections-components/sections-components.module';

const routes: Routes = [{ path: '', component: PageAboutComponent }];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes), SectionsComponentsModule, PageAboutComponent],
})
export class PageAboutModule {}
