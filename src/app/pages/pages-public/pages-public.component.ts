import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakConfig, RouteName } from '../../core/utils/config.core';
import { Title } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../../authentication/services/authentication.service';
import { DOCUMENT } from '@angular/common';
import { StorageService } from '../../core/services/storage.service';
import { WINDOW } from '../../core/services/windows.service';

@Component({
  selector: 'app-pages-public',
  templateUrl: './pages-public.component.html',
  styleUrls: ['./pages-public.component.scss'],
})
export class PagesPublicComponent implements OnInit {
  menus: string[] = [RouteName.services, RouteName.about, RouteName.portfolio, RouteName.blog] as string[];
  isUserLoaded$: Observable<boolean> = of(false);
  isScrolledTo100: boolean = false;
  @ViewChild('navBar', { static: true }) public navBar!: ElementRef;
  @ViewChild('mobileNavShow') public mobileNavShow!: ElementRef;
  @ViewChild('mobileNavHide') public mobileNavHide!: ElementRef;
  @ViewChild('scrollTo') public scrollTo!: ElementRef;
  protected readonly RouteName = RouteName;

  constructor(
    private router: Router,
    private titleService: Title,
    private authenticationService: AuthenticationService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) public window: Window,
    private storage: StorageService,
  ) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScrollStickyMenu(): void {
    this.isScrolledTo100 = (this.document.documentElement.scrollTop || this.document.body.scrollTop || 0) > 100;
    if (this.isScrolledTo100) {
      this.navBar.nativeElement.classList.add('stikcy-menu');
    } else {
      this.navBar.nativeElement.classList.remove('stikcy-menu');
    }
  }

  ngOnInit(): void {
    this.isUserLoaded$ = this.authenticationService.loaded$;
  }

  toNavigateMenu(menu: string = ''): void {
    this.router.navigate([menu]).then();
    this.titleService.setTitle(menu);
  }

  mobileNavToogle(): void {
    this.document.body.classList.toggle('mobile-nav-active');
    if (this.mobileNavShow) {
      this.mobileNavShow.nativeElement.classList.toggle('d-none');
    }
    if (this.mobileNavHide) {
      this.mobileNavHide.nativeElement.classList.toggle('d-none');
    }
  }

  /**
   * @author Samakunchan
   * Url de connexion via keycloak
   */
  login(): void {
    this.window.location.href = `${KeycloakConfig.loginKeycloakUrl}`;
  }

  /**
   * @author Samakunchan
   * Url de logout via keycloak
   */
  logout(): void {
    this.window.location.href = `${KeycloakConfig.keycloakUrlForLogout(this.storage.idToken)}`;
    this.storage.deleteTokens();
  }

  /**
   * @author Samakunchan
   * Repositionne la page vers le top
   */
  scrollToTop(): void {
    this.window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
