import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'header-bar',
    template: `
        <div class="header-container">
            <div class="back-title" (click)="onLogoClick()">
                MAAT
            </div>
            <div class="search-container">
                <form class="search-bar" (ngSubmit)="onSearch()">
                    <search-bar [formControl]="searchControl"></search-bar>
                </form>
            </div>
        </div>
    `,
    styles: [`
        .header-container {
            background-color: var(--background);
        }
        
        .header-container {
            display: flex;
            padding: 30px 10px 10px 20px;
        }
        
        .search-container {
            min-width: 50%;
        }
        
        .search-results {
            padding: 20px;
        }
        
        .enter-new {
            padding: 20px;
            margin: 0 20px;
            cursor: pointer;
            background: var(--background);
        }

        .back-title {
            font-size: 2rem;
            margin-right: 1.5rem;
            cursor: pointer;
        }
    `]
})
export class headerBarComponent {

    searchControl: FormControl = new FormControl(null);

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
        
    }

    onLogoClick() {
        this.router.navigate(["/"]);
    }

    onSearch() {
        const queryParams: Params = Object.assign({}, this.activatedRoute.snapshot.queryParams);
        queryParams['search'] = this.searchControl.value;

        this.router.navigate(['/results'], {queryParams: queryParams})
    }
}