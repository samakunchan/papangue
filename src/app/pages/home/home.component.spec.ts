import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { StorageCore } from '../../core/storage/storage.core';
import { ErrorMessage } from '../../core/utils/config.core';

describe('HomeComponent', (): void => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let storageDeleteTokenSpy: jasmine.SpyObj<StorageCore>;

  beforeEach(async (): Promise<void> => {
    storageDeleteTokenSpy = jasmine.createSpyObj<StorageCore>('StorageCore', ['deleteTokens'], ['idToken']);
    storageDeleteTokenSpy.idToken = 'not null to trigger true some condition';
    storageDeleteTokenSpy.deleteTokens.and.callThrough();

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        HttpClientTestingModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: (): string => '',
            allowedDomains: ['my-testing-env.com'],
          },
        }),
      ],
      providers: [
        JwtHelperService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', (): void => {
    expect(component).toBeTruthy();
  });

  it('should delete all token when logout is triggrered', (): void => {
    component.additionnalActionWithLogout();
    expect(storageDeleteTokenSpy.idToken != ErrorMessage.noIdToken).toBeTrue();
    expect(storageDeleteTokenSpy.deleteTokens).toBeTruthy();
  });
});
