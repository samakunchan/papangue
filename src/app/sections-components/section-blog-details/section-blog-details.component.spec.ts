import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlogDetailsComponent } from './section-blog-details.component';

describe('SectionBlogDetailsComponent', () => {
  let component: SectionBlogDetailsComponent;
  let fixture: ComponentFixture<SectionBlogDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlogDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
