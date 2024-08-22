import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogDetailsComponent } from './page-blog-details.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

describe('PageBlogDetailsComponent', (): void => {
  let component: PageBlogDetailsComponent;
  let fixture: ComponentFixture<PageBlogDetailsComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [PageBlogDetailsComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PageBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
