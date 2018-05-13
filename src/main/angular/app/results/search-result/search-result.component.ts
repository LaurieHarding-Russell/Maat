import {Component, Input} from "@angular/core";
import {SearchResult} from "../../model/search-result";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
    selector: 'search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {

    @Input()
    searchResult: SearchResult;

    constructor(private router: Router) {}

    onNameClick() {
        const queryParams: Params = {};
        queryParams['name'] = this.searchResult.name;
        this.router.navigate(['../company'], {queryParams: queryParams})
    }
}