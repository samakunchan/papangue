import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPortfolioComponent } from './section-portfolio.component';
import { FakesDatas } from '../../core/interceptors/fakes-datas';
import { NgOptimizedImage } from '@angular/common';
import { PipesModule } from '../../core/pipes/pipes.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('SectionPortfolioComponent', (): void => {
  let component: SectionPortfolioComponent;
  let fixture: ComponentFixture<SectionPortfolioComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
    imports: [NgOptimizedImage, PipesModule, RouterTestingModule, SectionPortfolioComponent],
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
