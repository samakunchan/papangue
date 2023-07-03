import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ErrorMessage, KeycloakConfig } from '../../core/utils/config.core';
import { StorageCore } from '../../core/storage/storage.core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isUserLoaded$: Observable<boolean> = of(false);
  hrefLogin: string = '';
  hrefLogout: string = '';

  constructor(private authenticationService: AuthenticationService, private router: Router, private storage: StorageCore) {}

  ngOnInit(): void {
    this.hrefLogin = `${KeycloakConfig.loginKeycloakUrl}`;
    if(this.storage.idToken != ErrorMessage.noIdToken) {
      this.hrefLogout = `${KeycloakConfig.keycloakUrlForLogout(this.storage.idToken)}`;
    }

    this.isUserLoaded$ = this.authenticationService.loaded$;
  }

  /**
   * @author Samakunchan
   * Url de logout via keycloak
   */
  additionnalActionWithLogout(): void {
    if (this.storage.idToken != ErrorMessage.noIdToken) {
      console.log('OKKKKKKK');
      this.storage.deleteTokens();
    }
  }
}
