import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHeroComponent } from './section-hero.component';
import { FakesDatas } from '../../core/interceptors/fakes-datas';
import { NgOptimizedImage } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('SectionHeroComponent', (): void => {
  let component: SectionHeroComponent;
  let fixture: ComponentFixture<SectionHeroComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
    imports: [NgOptimizedImage, RouterTestingModule, SectionHeroComponent],
}).compileComponents();

    fixture = TestBed.createComponent(SectionHeroComponent);
    component = fixture.componentInstance;
    component.section = FakesDatas.sectionHero;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
