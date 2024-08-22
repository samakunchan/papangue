import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogDetailsComponent } from './section-blog-details.component';
import { FakesDatas } from '../../core/interceptors/fakes-datas';
import { NgOptimizedImage } from '@angular/common';
import { IConfBlog } from '../../core/interfaces/section.interface';

describe('SectionBlogDetailsComponent', (): void => {
  let component: SectionBlogDetailsComponent;
  let fixture: ComponentFixture<SectionBlogDetailsComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
    imports: [NgOptimizedImage, SectionBlogDetailsComponent],
}).compileComponents();

    fixture = TestBed.createComponent(SectionBlogDetailsComponent);
    component = fixture.componentInstance;
    component.blog = JSON.parse(FakesDatas.sectionBlog.payload?.values[0] ?? '') as IConfBlog;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
