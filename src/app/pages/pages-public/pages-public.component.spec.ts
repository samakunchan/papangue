import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPublicComponent } from './pages-public.component';

describe('PagesPublicComponent', () => {
  let component: PagesPublicComponent;
  let fixture: ComponentFixture<PagesPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesPublicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PagesPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
