import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: 
  },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ]
})
export class AppRoutingModule {

}