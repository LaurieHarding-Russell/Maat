import { Component, OnInit, Input, OnChanges, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlValueAccessor } from '@angular/forms';

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
export class RatingComponent implements OnChanges, ControlValueAccessor {

    @Input() rating: number;
    @Input() disabled: boolean;

    @HostBinding('style.opacity')
    get opacity() {
        return this.disabled ? 0.75 : 1;
    }
    
    stars = Array(5).fill(false);

    onChange = (rating: number) => {
        this.stars = this.generateStarArray(rating);
    };
    
    ngOnChanges() {
        this.onChange(this.rating);
    }

    onTouched = () => {};
    
    constructor() {}
    
    get value() {
        return this.stars.reduce((total, starred) => {
        return total + (starred ? 1 : 0);
        }, 0);
    }

    rate(newRateing: number) {
        if (!this.disabled)
        this.writeValue(newRateing);
    }
    
    writeValue(rating: number): void {
        this.stars = this.stars.map((_, i) => rating > i);
        this.onChange(this.value);
    }
    
    registerOnChange(fn: (rating: number) => void): void {
        this.onChange = fn;
    }
    
    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }
    
    setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
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
