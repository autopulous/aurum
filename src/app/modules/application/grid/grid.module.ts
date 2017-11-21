import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {GridComponent} from './grid.component';
import {Grid1Component} from './grid-1/grid-1.component';
import {Grid2Component} from './grid-2/grid-2.component';
import {Grid3Component} from './grid-3/grid-3.component';
import {Grid5Component} from './grid-5/grid-5.component';
import {Grid8Component} from './grid-8/grid-8.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridComponent,
    Grid1Component,
    Grid2Component,
    Grid3Component,
    Grid5Component,
    Grid8Component
  ],
  exports: [
    GridComponent
  ]
})
export class GridModule {}
