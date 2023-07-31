import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolioDetailsComponent } from './page-portfolio-details.component';

describe('PagePortfolioDetailsComponent', () => {
  let component: PagePortfolioDetailsComponent;
  let fixture: ComponentFixture<PagePortfolioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePortfolioDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePortfolioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
