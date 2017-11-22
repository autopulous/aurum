import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GridComponent} from './grid.component';
import {AuDirectivesModule} from '../../directives/au.directives.module';

@NgModule({
  imports: [
    CommonModule,
    AuDirectivesModule
  ],
  declarations: [
    GridComponent
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule {}
