import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {SearchComponent} from "./search/search.component";
import {ProductComponent} from "./product/product.component";
import {ResultsComponent} from "./results/results.component";
import {CompanyComponent} from "./company/company.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchBarComponent} from "./common/search-bar.component";

@NgModule({
  declarations: [
      AppComponent,
      SearchComponent,
      CompanyComponent,
      ProductComponent,
      ResultsComponent,
      SearchBarComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
