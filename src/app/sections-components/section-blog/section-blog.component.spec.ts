import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogComponent } from './section-blog.component';
import { NgOptimizedImage } from '@angular/common';
import { FakesDatas } from '../../core/interceptors/fakes-datas';
import { PipesModule } from '../../core/pipes/pipes.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('SectionBlogComponent', (): void => {
  let component: SectionBlogComponent;
  let fixture: ComponentFixture<SectionBlogComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [SectionBlogComponent],
      imports: [NgOptimizedImage, PipesModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionBlogComponent);
    component = fixture.componentInstance;
    component.section = FakesDatas.sectionBlog;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
