import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPortfolioDetailsComponent } from './section-portfolio-details.component';

describe('SectionPortfolioDetailsComponent', () => {
  let component: SectionPortfolioDetailsComponent;
  let fixture: ComponentFixture<SectionPortfolioDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPortfolioDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPortfolioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
