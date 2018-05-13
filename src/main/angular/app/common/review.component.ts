import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'review',
  template: `
    <textarea> </textarea>
  `,
  styles: [`
    
  `]
})
export class ReviewComponent implements OnInit {
    company;
    stars = [true, true, true, false, false];

    constructor(private activatedRoute: ActivatedRoute) { }
    
    ngOnInit() {
      
    }

}
