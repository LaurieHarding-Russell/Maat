import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'review',
  template: `
    <h3> Your Review <rating [rating]="0"></rating></h3>
    <textarea> </textarea>
  `,
  styles: [`
    :host {
        display:block;
        border: 1px solid var(--secondary);
        box-shadow: 2px 3px var(--secondary);
        padding:1rem;
    }

    textarea {
        width: 100%;
        height: 4rem;
    }
  `]
})
export class ReviewComponent implements OnInit {
    company;
    stars = [true, true, true, false, false];

    constructor(private activatedRoute: ActivatedRoute) { }
    
    ngOnInit() {
      
    }

}
