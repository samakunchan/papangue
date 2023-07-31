import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBlogDetailsComponent } from './page-blog-details.component';

describe('PageBlogDetailsComponent', () => {
  let component: PageBlogDetailsComponent;
  let fixture: ComponentFixture<PageBlogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBlogDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
