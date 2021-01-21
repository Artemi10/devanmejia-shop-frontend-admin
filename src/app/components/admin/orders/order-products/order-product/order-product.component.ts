import {Component, Input, OnInit} from '@angular/core';
import {CartProduct} from '../../../../../models/cart-product.model';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  @Input() cartProduct: CartProduct;
  @Input() orderStatus: string;
  constructor() { }

  ngOnInit(): void {
  }

}
