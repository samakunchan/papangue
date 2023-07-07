import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredPageMailboxComponent } from './secured-page-mailbox.component';

describe('SecuredPageMailboxComponent', (): void => {
  let component: SecuredPageMailboxComponent;
  let fixture: ComponentFixture<SecuredPageMailboxComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [SecuredPageMailboxComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuredPageMailboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
