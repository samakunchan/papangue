import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredPageBlogComponent } from './secured-page-blog.component';

describe('SecuredPageBlogComponent', () => {
  let component: SecuredPageBlogComponent;
  let fixture: ComponentFixture<SecuredPageBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecuredPageBlogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuredPageBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
