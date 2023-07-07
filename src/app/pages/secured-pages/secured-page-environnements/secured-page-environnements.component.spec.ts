import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredPageEnvironnementsComponent } from './secured-page-environnements.component';

describe('SecuredPageEnvironnementsComponent', (): void => {
  let component: SecuredPageEnvironnementsComponent;
  let fixture: ComponentFixture<SecuredPageEnvironnementsComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [SecuredPageEnvironnementsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuredPageEnvironnementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
