import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContactsComponent } from './section-contacts.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('SectionContactsComponent', (): void => {
  let component: SectionContactsComponent;
  let fixture: ComponentFixture<SectionContactsComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [SectionContactsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
