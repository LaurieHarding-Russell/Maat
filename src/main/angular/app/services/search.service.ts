import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs/index";
import {SearchResult} from "../model/search-result";

const SERVICE_URL = '../api/search';

@Injectable()
export class SearchService {

    private searchResults$: Subject<Array<SearchResult>> = new Subject<Array<SearchResult>>();
    searchResults = this.searchResults$.asObservable();

    constructor(private http: HttpClient){}

    getCompanies(companyName: string) {
        return this.http.get(`//localhost:8080/api/search/${companyName}`).subscribe((results: Array<SearchResult>) => {
            this.searchResults$.next(results);
        });
    }
    
}