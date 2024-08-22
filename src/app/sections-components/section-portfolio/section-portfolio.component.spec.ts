import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPortfolioComponent } from './section-portfolio.component';
import { FakesDatas } from '../../core/interceptors/fakes-datas';
import { DatePipe, NgOptimizedImage } from '@angular/common';

import { GroupCategoryPipe } from '../../core/pipes/group-category.pipe';
import { LimitPipe } from '../../core/pipes/limit.pipe';
import { FilterByPipe } from '../../core/pipes/filter-by.pipe';
import { provideRouter } from '@angular/router';

describe('SectionPortfolioComponent', (): void => {
  let component: SectionPortfolioComponent;
  let fixture: ComponentFixture<SectionPortfolioComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [NgOptimizedImage, GroupCategoryPipe, LimitPipe, FilterByPipe, DatePipe, SectionPortfolioComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionPortfolioComponent);
    component = fixture.componentInstance;
    component.section = FakesDatas.sectionPortfolio;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
