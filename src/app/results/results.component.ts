import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'company',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  searchControl: FormControl = new FormControl(null);

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.searchControl.setValue(params.get('search'));
    });
  }

  onSearch() {
    const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
    queryParams['search'] = this.searchControl.value;

    this.router.navigate(['./results'], {queryParams: queryParams})
  }

}
