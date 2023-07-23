import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SectionBlogComponent } from './section-blog/section-blog.component';
import { SectionPortfolioComponent } from './section-portfolio/section-portfolio.component';
import { SectionCallToActionComponent } from './section-call-to-action/section-call-to-action.component';
import { SectionWhyusComponent } from './section-whyus/section-whyus.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { SectionHeroComponent } from './section-hero/section-hero.component';
import { SectionContactsComponent } from './section-contacts/section-contacts.component';

@NgModule({
  declarations: [
    SectionBlogComponent,
    SectionPortfolioComponent,
    SectionCallToActionComponent,
    SectionWhyusComponent,
    SectionServicesComponent,
    SectionHeroComponent,
    SectionContactsComponent,
  ],
  imports: [CommonModule, NgOptimizedImage],
  exports: [
    SectionBlogComponent,
    SectionPortfolioComponent,
    SectionCallToActionComponent,
    SectionWhyusComponent,
    SectionServicesComponent,
    SectionHeroComponent,
    SectionContactsComponent,
  ],
})
export class SectionsComponentsModule {}
