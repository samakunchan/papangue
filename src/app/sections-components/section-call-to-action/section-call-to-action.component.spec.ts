import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCallToActionComponent } from './section-call-to-action.component';
import { FakesDatas } from '../../core/interceptors/fakes-datas';
import { provideRouter } from '@angular/router';

describe('SectionCallToActionComponent', () => {
  let component: SectionCallToActionComponent;
  let fixture: ComponentFixture<SectionCallToActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionCallToActionComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionCallToActionComponent);
    component = fixture.componentInstance;
    component.section = FakesDatas.sectionCallToAction1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
