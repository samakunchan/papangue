import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Lazy loading
 * Route public
 * Route authentifié
 */
const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/pages-public/pages-public.module').then((m) => m.PagesPublicModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
