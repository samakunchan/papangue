import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolioComponent } from './page-portfolio.component';

describe('PagePortfolioComponent', () => {
  let component: PagePortfolioComponent;
  let fixture: ComponentFixture<PagePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagePortfolioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
