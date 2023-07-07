import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredPageServicesComponent } from './secured-page-services.component';

describe('SecuredPageServicesComponent', (): void => {
  let component: SecuredPageServicesComponent;
  let fixture: ComponentFixture<SecuredPageServicesComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [SecuredPageServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuredPageServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
