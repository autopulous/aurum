import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuDirectiveModule} from './au/au.module';

import {AuDirective} from './au/au.directive';

@NgModule({
  imports: [
    CommonModule,
    AuDirectiveModule
  ],
  declarations: [
  ],
  exports: [
    AuDirective
  ]
})
export class AuDirectivesModule {}
