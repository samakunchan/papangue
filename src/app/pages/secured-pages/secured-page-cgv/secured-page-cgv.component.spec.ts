import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredPageCgvComponent } from './secured-page-cgv.component';

describe('SecuredPageCgvComponent', (): void => {
  let component: SecuredPageCgvComponent;
  let fixture: ComponentFixture<SecuredPageCgvComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [SecuredPageCgvComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuredPageCgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
