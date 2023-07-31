import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServicesComponent } from './page-services.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgOptimizedImage } from '@angular/common';

describe('PageServicesComponent', (): void => {
  let component: PageServicesComponent;
  let fixture: ComponentFixture<PageServicesComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [PageServicesComponent],
      imports: [HttpClientTestingModule, RouterTestingModule, NgOptimizedImage],
    }).compileComponents();

    fixture = TestBed.createComponent(PageServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
