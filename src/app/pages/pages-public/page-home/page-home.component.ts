import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { Router } from '@angular/router';
import { StorageService } from '../../../core/services/storage.service';
import { KeycloakConfig } from '../../../core/utils/config.core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
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

  toAdmin() {
    this.router.navigate(['admin']).then();
  }
}
