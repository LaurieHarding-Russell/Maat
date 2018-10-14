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

  searchResults: Array<SearchResult> = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.searchResults.subscribe(results => this.searchResults = results);

    this.activatedRoute.queryParamMap.subscribe(params => {
      this.searchService.getCompanies(params.get('searhc'));
    });
  }
}
