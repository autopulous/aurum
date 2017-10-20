import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuComponentModule} from './au/au.module';

import {AuComponent} from './au/au.component';

@NgModule({
  imports: [
    CommonModule,
    AuComponentModule
  ],
  declarations: [
  ],
  exports: [
    AuComponent
  ]
})
export class AuComponentsModule {}
