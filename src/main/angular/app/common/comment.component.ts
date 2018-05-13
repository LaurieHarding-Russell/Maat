import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'comment',
  template: `
    <div>{{comment}}</div>
    <rating></rating>
  `,
  styles: [`
    :host {
        background: var(--background)
    }
  `]
})
export class CommentComponent implements OnInit {
    
    @Input()
    comment;

    constructor(private activatedRoute: ActivatedRoute) { }
    
    ngOnInit() {
      
    }

}
