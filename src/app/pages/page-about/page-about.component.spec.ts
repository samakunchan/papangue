import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAboutComponent } from './page-about.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('PageAboutComponent', (): void => {
  let component: PageAboutComponent;
  let fixture: ComponentFixture<PageAboutComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      declarations: [PageAboutComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
