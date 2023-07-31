import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogComponent } from './page-blog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PageBlogComponent', (): void => {
  let component: PageBlogComponent;
  let fixture: ComponentFixture<PageBlogComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [PageBlogComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PageBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
