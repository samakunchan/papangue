import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredPageMailboxComponent } from './secured-page-mailbox.component';

describe('SecuredPageMailboxComponent', () => {
  let component: SecuredPageMailboxComponent;
  let fixture: ComponentFixture<SecuredPageMailboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuredPageMailboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuredPageMailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
