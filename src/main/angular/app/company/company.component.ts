import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
    company;
    rating = 4;

    constructor(private activatedRoute: ActivatedRoute) { }
    
    ngOnInit() {
      this.company = this.activatedRoute.snapshot.queryParamMap.get("name");
    }

}
