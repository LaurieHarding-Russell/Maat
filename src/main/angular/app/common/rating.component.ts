import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rating',
  template: `
    <div class="rating">
        <i *ngFor="let star of stars" class="fa-star" [ngClass]="{fas: star, far:!star}"></i>
    </div>
  `,
  styles: [`
    
  `]
})
export class RatingComponent implements OnChanges {
    
    stars = [];

    @Input() rating: number;

    
    constructor(private activatedRoute: ActivatedRoute) { }
    
    ngOnChanges() {
        this.stars = this.generateStarArray(this.rating)
    }

    generateStarArray(stars:number) {
        const NUMBER_OF_STARS = 5;
        let starArray = [];
        let i = 0;
        for(; i< stars; i++) starArray[i] = true;
        for(; i< NUMBER_OF_STARS; i++) starArray[i] = false;
    
        return starArray;
    }
}
