import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
    company;
    stars = [true, true, true, false, false];

    comments = ["They are terrible", "worst thing ever"]

    constructor(private activatedRoute: ActivatedRoute) { }
    
    ngOnInit() {
      this.company = this.activatedRoute.snapshot.queryParamMap.get("name");
    }

}
