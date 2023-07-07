import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredPageBlogComponent } from './secured-page-blog.component';

describe('SecuredPageBlogComponent', (): void => {
  let component: SecuredPageBlogComponent;
  let fixture: ComponentFixture<SecuredPageBlogComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [SecuredPageBlogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SecuredPageBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
