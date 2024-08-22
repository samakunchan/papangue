import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWhyusComponent } from './section-whyus.component';
import { FakesDatas } from '../../core/interceptors/fakes-datas';
import { NgOptimizedImage } from '@angular/common';
import { ParseWhyUsPipe } from '../../core/pipes/parse-why-us.pipe';

describe('SectionWhyusComponent', (): void => {
  let component: SectionWhyusComponent;
  let fixture: ComponentFixture<SectionWhyusComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [NgOptimizedImage, ParseWhyUsPipe, SectionWhyusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionWhyusComponent);
    component = fixture.componentInstance;
    component.section = FakesDatas.sectionWhyus;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
