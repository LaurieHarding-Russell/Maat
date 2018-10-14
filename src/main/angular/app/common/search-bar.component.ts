import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Component} from "@angular/core";

@Component({
    selector: 'search-bar',
    template: `
        <span class="search-bar">
            <input type="text" (change)="onChange($event.target.value)" (blur)="onTouched()"
                   [value]="searchInput" placeholder="Company name or product"/>
        </span>
        
    `,
    styles: [`
        .search-bar{
            position: relative;
        }
        
        .search-bar:before {
            font-family: 'Font Awesome\\ 5 Free';
            position: absolute;
            right: 10px;
            top: 0px;
            content: "\\f002";
            color: #7f7f7f;
            font-weight: 900;
        }

        .search-bar input {
            display: inline;
            width: 100%;
            font-size: 1.2rem;
            padding: 5px 15px 5px 15px;
            border: 0;
        }

        .user {

        }
    `],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: SearchBarComponent,
            multi: true
        }
    ]
})
export class SearchBarComponent implements ControlValueAccessor {

    searchInput;

    onChange = (fn: any) => { };
    onTouched = () => { };

    writeValue(obj: any): void {
        this.searchInput = obj;
        this.onChange(obj);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

}