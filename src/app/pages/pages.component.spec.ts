import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesComponent } from './pages.component';
import { WINDOW } from '../core/services/windows.service';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from '../core/pipes/pipes.module';

describe('PagesComponent', (): void => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, PipesModule],
      declarations: [PagesComponent],
      providers: [{ provide: WINDOW, useValue: '', multi: true }],
    }).compileComponents();

    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
