import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuDirective} from './au.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuDirective
  ],
  exports: [
    AuDirective
  ]
})
export class AuDirectiveModule {}
