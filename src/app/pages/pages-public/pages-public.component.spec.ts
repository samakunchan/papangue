import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesPublicComponent } from './pages-public.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { JwtModule } from '@auth0/angular-jwt';
import { UcFirstPipe } from '../../core/pipes/uc-first.pipe';
import { ParseMenuPipe } from '../../core/pipes/parse-menu.pipe';
import { WINDOW } from '../../core/services/windows.service';

describe('PagesPublicComponent', (): void => {
  let component: PagesPublicComponent;
  let fixture: ComponentFixture<PagesPublicComponent>;

  beforeEach(async (): Promise<void> => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: (): string => '',
            allowedDomains: ['my-testing-env.com'],
          },
        }),
      ],
      declarations: [PagesPublicComponent, UcFirstPipe, ParseMenuPipe],
      providers: [AuthenticationService, { provide: WINDOW, useValue: '', multi: true }],
    }).compileComponents();

    fixture = TestBed.createComponent(PagesPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });
});
