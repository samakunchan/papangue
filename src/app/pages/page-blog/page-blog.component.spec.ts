import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogComponent } from './page-blog.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('PageBlogComponent', (): void => {
  let component: PageBlogComponent;
  let fixture: ComponentFixture<PageBlogComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [PageBlogComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(PageBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
