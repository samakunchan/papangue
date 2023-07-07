import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredPageDashboardComponent } from './secured-page-dashboard.component';

describe('DashboardPageComponent', () => {
  let component: SecuredPageDashboardComponent;
  let fixture: ComponentFixture<SecuredPageDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuredPageDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuredPageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
