
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MaatModule} from './maat/maat.module';

@NgModule({
  imports: [BrowserModule, MaatModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
