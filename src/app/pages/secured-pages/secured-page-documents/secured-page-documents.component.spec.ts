import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredPageDocumentsComponent } from './secured-page-documents.component';

describe('SecuredPageDocumentsComponent', (): void => {
  let component: SecuredPageDocumentsComponent;
  let fixture: ComponentFixture<SecuredPageDocumentsComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [SecuredPageDocumentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuredPageDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});