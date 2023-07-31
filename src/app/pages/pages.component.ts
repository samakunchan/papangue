import { Component, ElementRef, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { WINDOW } from '../core/services/windows.service';
import { RouteName } from '../core/utils/config.core';
import { map, Observable } from 'rxjs';
import { DatasService } from '../core/services/datas.service';
import { IResponseApi } from '../core/interfaces/response-api.interface';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  isScrolledTo100: boolean = false;
  menus$: Observable<string[]> = new Observable<string[]>();
  @ViewChild('navBar', { static: true }) public navBar!: ElementRef;
  @ViewChild('mobileNavShow') public mobileNavShow!: ElementRef;
  @ViewChild('mobileNavHide') public mobileNavHide!: ElementRef;
  @ViewChild('scrollTo') public scrollTo!: ElementRef;

  constructor(
    private router: Router,
    private titleService: Title,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) public window: Window,
    private datasService: DatasService,
  ) {}

  ngOnInit(): void {
    this.menus$ = this.datasService.datasResult$.pipe(map(this.getMenus));
  }

  getMenus(response: IResponseApi): string[] {
    return (
      Object.keys(response.datasJson!)
        .filter((menu: string): boolean => menu !== 'home')
        // @ts-ignore
        .map((menu: string): string => RouteName[menu].value)
    );
  }

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
