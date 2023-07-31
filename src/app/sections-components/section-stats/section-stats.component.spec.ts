import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionStatsComponent } from './section-stats.component';

describe('SectionStatsComponent', () => {
  let component: SectionStatsComponent;
  let fixture: ComponentFixture<SectionStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
