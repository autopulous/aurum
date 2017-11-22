import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuComponentsModule} from '../components/au.components.module';
import {AuDirectivesModule} from '../directives/au.directives.module';

import {GridModule} from './grid/grid.module';

import {ApplicationComponent} from './application.component';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    AuComponentsModule,
    AuDirectivesModule
  ],
  declarations: [
    ApplicationComponent
  ],
  exports: [
    ApplicationComponent
  ]
})
export class ApplicationModule {}
