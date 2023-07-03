import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { canActivateAdminPage } from './core/guards/logged.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'admin', component: AdminComponent, canActivate: [canActivateAdminPage] },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
