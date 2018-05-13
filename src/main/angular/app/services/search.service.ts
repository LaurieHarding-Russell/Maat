import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

const SERVICE_URL = '../api/search';

@Injectable()
export class SearchService {

    constructor(private http: HttpClient){}

    getCompanies(companyName: string) {
        this.http.get(`//localhost:8080/api/search/${companyName}`).subscribe(results => console.log(results));
    }
    
}