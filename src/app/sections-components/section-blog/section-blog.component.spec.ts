import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogComponent } from './section-blog.component';
import { DatePipe, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { FakesDatas } from '../../core/interceptors/fakes-datas';
import { ParseBlogPipe } from '../../core/pipes/parse-blog.pipe';
import { LimitPipe } from '../../core/pipes/limit.pipe';
import { provideRouter } from '@angular/router';

describe('SectionBlogComponent', (): void => {
  let component: SectionBlogComponent;
  let fixture: ComponentFixture<SectionBlogComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [NgOptimizedImage, ParseBlogPipe, TitleCasePipe, DatePipe, LimitPipe, SectionBlogComponent],
      providers: [provideRouter([])],
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
