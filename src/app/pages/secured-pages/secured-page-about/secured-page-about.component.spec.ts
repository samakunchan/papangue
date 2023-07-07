import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredPageAboutComponent } from './secured-page-about.component';

describe('SecuredPageAboutComponent', () => {
  let component: SecuredPageAboutComponent;
  let fixture: ComponentFixture<SecuredPageAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuredPageAboutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuredPageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
