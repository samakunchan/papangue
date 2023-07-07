import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { KeycloakConfig } from '../../core/utils/config.core';
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isUserLoaded$: Observable<boolean> = of(false);

  constructor(private authenticationService: AuthenticationService, private router: Router, private storage: StorageService) {}

  ngOnInit(): void {
    this.isUserLoaded$ = this.authenticationService.loaded$;
  }

  /**
   * @author Samakunchan
   * Url de connexion via keycloak
   */
  login(): void {
    window.location.href = `${KeycloakConfig.loginKeycloakUrl}`;
  }

  /**
   * @author Samakunchan
   * Url de logout via keycloak
   */
  logout(): void {
    window.location.href = `${KeycloakConfig.keycloakUrlForLogout(this.storage.idToken)}`;
    this.storage.deleteTokens();
  }
}
