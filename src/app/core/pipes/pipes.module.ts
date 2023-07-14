import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParseMenuPipe } from './parse-menu.pipe';
import { UcFirstPipe } from './uc-first.pipe';

@NgModule({
  declarations: [ParseMenuPipe, UcFirstPipe],
  exports: [ParseMenuPipe, UcFirstPipe],
  imports: [CommonModule],
})
export class PipesModule {}
