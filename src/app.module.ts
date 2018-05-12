import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MaatModule} from './maat/maat.module';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports: [BrowserModule, MaatModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
