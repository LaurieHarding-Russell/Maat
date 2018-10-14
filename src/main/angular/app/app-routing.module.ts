import { NgModule } from '@angular/core';

import {SearchComponent} from "./search/search.component";
import {RouterModule, Routes} from "@angular/router";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

import { CompanyComponent } from './company/company.component';
import { ProductComponent } from './product/product.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
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