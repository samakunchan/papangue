import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { routes } from './app.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: 'enabled',
    }),
    NgOptimizedImage,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
