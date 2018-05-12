import { NgModule } from '@angular/core';

import {SearchComponent} from "./search/search.component";
import {RouterModule, Routes} from "@angular/router";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ]
})
export class AppRoutingModule {

}