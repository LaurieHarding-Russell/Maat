import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs/index";
import {SearchResult} from "../model/search-result";

const SERVICE_URL = '../api/search';

@Injectable()
export class SearchService {

    private searchResults$: BehaviorSubject<SearchResult> = new BehaviorSubject<SearchResult>(null);
    searchResults = this.searchResults$.asObservable();

    constructor(private http: HttpClient){}

    getCompanies(companyName: string) {
        return this.http.get(`//localhost:8080/api/search/${companyName}`).subscribe(results => {
            this.searchResults$.next(results);
        });
    }
    
}