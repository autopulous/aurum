import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuComponent} from './au.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuComponent
  ],
  exports: [
    AuComponent
  ]
})
export class AuComponentModule {}
