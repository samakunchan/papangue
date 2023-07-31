import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStatsComponent } from './section-stats.component';
import { FakesDatas } from '../../core/interceptors/fakes-datas';
import { NgOptimizedImage } from '@angular/common';
import { PipesModule } from '../../core/pipes/pipes.module';

describe('SectionStatsComponent', (): void => {
  let component: SectionStatsComponent;
  let fixture: ComponentFixture<SectionStatsComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [SectionStatsComponent],
      imports: [NgOptimizedImage, PipesModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionStatsComponent);
    component = fixture.componentInstance;
    component.section = FakesDatas.sectionStats;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
