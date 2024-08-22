import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogComponent } from './section-blog.component';
import { DatePipe, NgOptimizedImage, TitleCasePipe } from '@angular/common';
import { FakesDatas } from '../../core/interceptors/fakes-datas';
import { RouterTestingModule } from '@angular/router/testing';
import { ParseBlogPipe } from '../../core/pipes/parse-blog.pipe';
import { LimitPipe } from '../../core/pipes/limit.pipe';

describe('SectionBlogComponent', (): void => {
  let component: SectionBlogComponent;
  let fixture: ComponentFixture<SectionBlogComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [NgOptimizedImage, ParseBlogPipe, TitleCasePipe, DatePipe, LimitPipe, RouterTestingModule, SectionBlogComponent],
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
