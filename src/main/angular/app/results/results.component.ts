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

  mockSearchResult: SearchResult = {
      name: 'Google',
      rating: 3,
      description: 'The most powerful company in the world',
      routeId: '',
      imagePath: ''
  };

  searchControl: FormControl = new FormControl(null);
  searchResults: Array<SearchResult> = [this.mockSearchResult];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private searchService: SearchService) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.searchControl.setValue(params.get('search'));
    });
  }

  onSearch() {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['search'] = this.searchControl.value;

    this.router.navigate(['./results'], {queryParams: queryParams});

    this.searchService.getCompanies(this.searchControl.value);
  }

  onLogoClick() {
    this.router.navigate(["../"]);
  }

}
