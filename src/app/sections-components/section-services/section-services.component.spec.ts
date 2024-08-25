import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServicesComponent } from './section-services.component';
import { FakesDatas } from '../../core/interceptors/fakes-datas';
import { NgOptimizedImage } from '@angular/common';
import { ParseServicePipe } from '../../core/pipes/parse-service.pipe';

describe('SectionServicesComponent', (): void => {
  let component: SectionServicesComponent;
  let fixture: ComponentFixture<SectionServicesComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [NgOptimizedImage, ParseServicePipe, SectionServicesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionServicesComponent);
    component = fixture.componentInstance;
    component.section = FakesDatas.sectionServices;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
