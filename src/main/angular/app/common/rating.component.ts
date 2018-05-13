import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rating',
  template: `
    <span class="rating">
        <a *ngFor="let star of stars; let i = index" (click)="rate(i + 1)" class="fa-star" [ngClass]="{fas: star, far:!star}"></a>
    </span>
  `,
  styles: [`
    a {
        color: var(--secondary);
    }
  `]
})
// FIXME, Use control accessor.
export class RatingComponent implements OnChanges {
    
    stars = [];

    @Input() rating: number;
    @Input() disabled: boolean;

    
    constructor(private activatedRoute: ActivatedRoute) { }
    
    ngOnChanges() {
        this.stars = this.generateStarArray(this.rating)
    }

    rate(newRateing: number) {
        if (!this.disabled)
            this.stars = this.generateStarArray(newRateing);
    }

    private generateStarArray(stars:number) {
        const NUMBER_OF_STARS = 5;
        let starArray = [];
        let i = 0;
        for(; i< stars; i++) starArray[i] = true;
        for(; i< NUMBER_OF_STARS; i++) starArray[i] = false;
    
        return starArray;
    }
}
