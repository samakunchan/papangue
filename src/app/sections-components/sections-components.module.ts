import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SectionBlogComponent } from './section-blog/section-blog.component';
import { SectionPortfolioComponent } from './section-portfolio/section-portfolio.component';
import { SectionCallToActionComponent } from './section-call-to-action/section-call-to-action.component';
import { SectionWhyusComponent } from './section-whyus/section-whyus.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { SectionHeroComponent } from './section-hero/section-hero.component';
import { SectionContactsComponent } from './section-contacts/section-contacts.component';
import { SectionStatsComponent } from './section-stats/section-stats.component';
import { PipesModule } from '../core/pipes/pipes.module';
import { SectionPortfolioDetailsComponent } from './section-portfolio-details/section-portfolio-details.component';
import { SectionBlogDetailsComponent } from './section-blog-details/section-blog-details.component';
import { RouterLink } from '@angular/router';

@NgModule({
    imports: [CommonModule, NgOptimizedImage, PipesModule, RouterLink, SectionBlogComponent,
        SectionPortfolioComponent,
        SectionCallToActionComponent,
        SectionWhyusComponent,
        SectionServicesComponent,
        SectionHeroComponent,
        SectionContactsComponent,
        SectionStatsComponent,
        SectionPortfolioDetailsComponent,
        SectionBlogDetailsComponent],
    exports: [
        SectionBlogComponent,
        SectionPortfolioComponent,
        SectionCallToActionComponent,
        SectionWhyusComponent,
        SectionServicesComponent,
        SectionHeroComponent,
        SectionContactsComponent,
        SectionStatsComponent,
        SectionPortfolioDetailsComponent,
        SectionBlogDetailsComponent,
    ],
})
export class SectionsComponentsModule {}
