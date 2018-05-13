import {Component, Input} from "@angular/core";
import {SearchResult} from "../../model/search-result";

@Component({
    selector: 'search-result',
    templateUrl: './search-result.component.html'
})
export class SearchResultComponent {

    @Input()
    searchResult: SearchResult;
}