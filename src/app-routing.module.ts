import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {NgModule} from "@angular/core";
import {MaatComponent} from "./maat/maat.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: MaatComponent
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