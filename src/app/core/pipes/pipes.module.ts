import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParseMenuPipe } from './parse-menu.pipe';
import { UcFirstPipe } from './uc-first.pipe';
import { ParsePortfolioPipe } from './parse-portfolio.pipe';
import { LimitPipe } from './limit.pipe';
import { FilterLandingPagePipe } from './filter-landing-page.pipe';
import { FilterByPipe } from './filter-by.pipe';
import { GroupCategoryPipe } from './group-category.pipe';
import { ParseBlogPipe } from './parse-blog.pipe';
import { ParseServicePipe } from './parse-service.pipe';
import { ParseWhyUsPipe } from './parse-why-us.pipe';
import { ParseStatsPipe } from './parse-stats.pipe';

@NgModule({
    exports: [
        ParseMenuPipe,
        UcFirstPipe,
        ParsePortfolioPipe,
        LimitPipe,
        FilterLandingPagePipe,
        FilterByPipe,
        GroupCategoryPipe,
        ParseBlogPipe,
        ParseServicePipe,
        ParseWhyUsPipe,
        ParseStatsPipe,
    ],
    imports: [CommonModule, ParseMenuPipe,
        UcFirstPipe,
        ParsePortfolioPipe,
        LimitPipe,
        FilterLandingPagePipe,
        FilterByPipe,
        GroupCategoryPipe,
        ParseBlogPipe,
        ParseServicePipe,
        ParseWhyUsPipe,
        ParseStatsPipe],
})
export class PipesModule {}
