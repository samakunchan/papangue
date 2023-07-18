import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../core/services/windows.service';
import { RouteName } from '../core/utils/config.core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent {
  menus: string[] = [RouteName.services, RouteName.about, RouteName.portfolio, RouteName.blog] as string[];
  isScrolledTo100: boolean = false;
  @ViewChild('navBar', { static: true }) public navBar!: ElementRef;
  @ViewChild('mobileNavShow') public mobileNavShow!: ElementRef;
  @ViewChild('mobileNavHide') public mobileNavHide!: ElementRef;
  @ViewChild('scrollTo') public scrollTo!: ElementRef;

  constructor(
    private router: Router,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) public window: Window,
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
   * Repositionne la page vers le top
   */
  scrollToTop(): void {
    this.window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
