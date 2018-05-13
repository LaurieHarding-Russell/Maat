import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl} from "@angular/forms";
import {SearchResult} from "../model/search-result";
import {SearchService} from "../services/search.service";

@Component({
  selector: 'company',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  searchControl: FormControl = new FormControl(null);
  searchResults: Array<SearchResult> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private searchService: SearchService) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.searchControl.setValue(params.get('search'));
        this.searchService.getCompanies(this.searchControl.value);
    });

    this.searchService.searchResults.subscribe(results => this.searchResults = results);
  }

  onSearch() {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['search'] = this.searchControl.value;

    this.router.navigate(['./results'], {queryParams: queryParams});
  }

  onLogoClick() {
    this.router.navigate(["../"]);
  }

}
