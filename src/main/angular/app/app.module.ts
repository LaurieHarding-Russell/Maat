import { CompanyService } from './services/company.service';
import { ProductService } from './services/product.service';
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
import { SearchService } from './services/search.service';
import {SearchResultComponent} from "./results/search-result/search-result.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ReviewComponent } from './common/review.component';
import { CommentComponent } from './common/comment.component';
import { RatingComponent } from './common/rating.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { headerBarComponent } from './common/header-bar.component';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        CommentComponent,
        CompanyComponent,
        headerBarComponent,
        ProductComponent,
        RatingComponent,
        ResultsComponent,
        ReviewComponent,
        SearchBarComponent,
        SearchResultComponent,
        SignUpComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [
        SearchService,
        ProductService,
        CompanyService,
        AuthService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
