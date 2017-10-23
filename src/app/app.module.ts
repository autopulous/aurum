import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {ApplicationModule} from './modules/application/application.module';

import {ApplicationComponent} from './modules/application/application.component';

@NgModule({
  imports: [
    BrowserModule,
    ApplicationModule
  ],
  providers: [
  ],
  bootstrap: [
    ApplicationComponent
  ]
})
export class AppModule {}
