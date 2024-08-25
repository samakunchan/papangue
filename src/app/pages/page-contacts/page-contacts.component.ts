import { Component } from '@angular/core';
import { SectionContactsComponent } from '../../sections-components/section-contacts/section-contacts.component';

@Component({
  selector: 'app-page-contacts',
  templateUrl: './page-contacts.component.html',
  styleUrls: ['./page-contacts.component.scss'],
  standalone: true,
  imports: [SectionContactsComponent],
})
export class PageContactsComponent {}
