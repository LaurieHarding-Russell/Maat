import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product: Product = {
    name: "test",
    rating: 4,
    countryOfOrigin: "Canada",
    reviews: ["test1", "test2"],
    company: null
  };

  stars: Array<boolean>;

  constructor(private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {}
  
}
