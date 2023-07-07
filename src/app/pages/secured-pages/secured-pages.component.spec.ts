import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredPagesComponent } from './secured-pages.component';

describe('PagesWithAuthComponent', (): void => {
  let component: SecuredPagesComponent;
  let fixture: ComponentFixture<SecuredPagesComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [SecuredPagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuredPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
