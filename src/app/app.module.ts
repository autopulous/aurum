import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AuDirectivesModule} from './modules/directives/au.directives.module';
import {AuComponentsModule} from './modules/components/au.components.module';

import {AppComponent} from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AuComponentsModule,
    AuDirectivesModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
