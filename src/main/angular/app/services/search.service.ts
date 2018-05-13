import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs/index";
import {SearchResult} from "../model/search-result";

const SERVICE_URL = '../api/search';

@Injectable()
export class SearchService {

    private searchResults$: Subject<SearchResult> = new Subject<SearchResult>();
    searchResults = this.searchResults$.asObservable();

    constructor(private http: HttpClient){}

    getCompanies(companyName: string) {
        return this.http.get(`//localhost:8080/api/search/${companyName}`).subscribe(results => {
            this.searchResults$.next(results);
        });
    }
    
}