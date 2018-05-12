import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product;
  stars = [true, true, true, false, false];

  constructor(private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.product = this.activatedRoute.snapshot.queryParamMap.get("name");
  }
}
