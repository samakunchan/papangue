import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServicesComponent } from './page-services.component';

describe('PageServicesComponent', (): void => {
  let component: PageServicesComponent;
  let fixture: ComponentFixture<PageServicesComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [PageServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
