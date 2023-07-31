import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogDetailsComponent } from './page-blog-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageBlogDetailsComponent', (): void => {
  let component: PageBlogDetailsComponent;
  let fixture: ComponentFixture<PageBlogDetailsComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [PageBlogDetailsComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PageBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
