import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from '../../../authentication/services/authentication.service';
import { Router } from '@angular/router';
import { StorageService } from '../../../core/services/storage.service';

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
}
