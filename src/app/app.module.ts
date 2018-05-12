import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {SearchComponent} from "./search/search.component";
import {ProductComponent} from "./product/product.component";
import {ResultsComponent} from "./results/results.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CompanyComponent,
    ProductComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
