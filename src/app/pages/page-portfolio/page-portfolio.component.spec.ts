import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolioComponent } from './page-portfolio.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgOptimizedImage } from '@angular/common';

describe('PagePortfolioComponent', (): void => {
  let component: PagePortfolioComponent;
  let fixture: ComponentFixture<PagePortfolioComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, NgOptimizedImage, PagePortfolioComponent],
}).compileComponents();

    fixture = TestBed.createComponent(PagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
