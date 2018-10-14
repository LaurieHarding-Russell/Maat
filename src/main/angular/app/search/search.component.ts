import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchControl: FormControl = new FormControl(null);

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {}

  onSearch() {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['search'] = this.searchControl.value;

    this.router.navigate(['/results'], {queryParams: queryParams})
  }
    
}
