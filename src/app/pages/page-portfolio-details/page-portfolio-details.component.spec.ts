import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePortfolioDetailsComponent } from './page-portfolio-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PagePortfolioDetailsComponent', (): void => {
  let component: PagePortfolioDetailsComponent;
  let fixture: ComponentFixture<PagePortfolioDetailsComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule, PagePortfolioDetailsComponent],
}).compileComponents();

    fixture = TestBed.createComponent(PagePortfolioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
