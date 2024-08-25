import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolioDetailsComponent } from './page-portfolio-details.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('PagePortfolioDetailsComponent', (): void => {
  let component: PagePortfolioDetailsComponent;
  let fixture: ComponentFixture<PagePortfolioDetailsComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [PagePortfolioDetailsComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PagePortfolioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
