import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPublicComponent } from './pages-public.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PagesPublicComponent', () => {
  let component: PagesPublicComponent;
  let fixture: ComponentFixture<PagesPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
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
