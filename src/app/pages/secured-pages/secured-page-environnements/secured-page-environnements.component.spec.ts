import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredPageEnvironnementsComponent } from './secured-page-environnements.component';

describe('SecuredPageEnvironnementsComponent', () => {
  let component: SecuredPageEnvironnementsComponent;
  let fixture: ComponentFixture<SecuredPageEnvironnementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuredPageEnvironnementsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuredPageEnvironnementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
