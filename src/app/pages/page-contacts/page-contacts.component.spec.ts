import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContactsComponent } from './page-contacts.component';

describe('PageContactsComponent', () => {
  let component: PageContactsComponent;
  let fixture: ComponentFixture<PageContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
