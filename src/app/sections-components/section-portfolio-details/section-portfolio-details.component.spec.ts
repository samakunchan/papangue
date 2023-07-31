import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPortfolioDetailsComponent } from './section-portfolio-details.component';
import { FakesDatas } from '../../core/interceptors/fakes-datas';
import { IConfPortfolio } from '../../core/interfaces/section.interface';
import { NgOptimizedImage } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SectionPortfolioDetailsComponent', () => {
  let component: SectionPortfolioDetailsComponent;
  let fixture: ComponentFixture<SectionPortfolioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionPortfolioDetailsComponent],
      imports: [NgOptimizedImage, BrowserAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionPortfolioDetailsComponent);
    component = fixture.componentInstance;
    component.portfolio = JSON.parse(FakesDatas.sectionPortfolio.payload?.values[0] ?? '') as IConfPortfolio;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
