import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredPagePortfolioComponent } from './secured-page-portfolio.component';

describe('SecuredPagePortfolioComponent', () => {
  let component: SecuredPagePortfolioComponent;
  let fixture: ComponentFixture<SecuredPagePortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuredPagePortfolioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuredPagePortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
