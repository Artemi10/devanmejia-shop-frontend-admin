import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Order} from '../../../../models/order.model';
import {CartProduct} from '../../../../models/cart-product.model';
import {CartProductService} from '../../../../services/cart-product/cart-product.service';
import {OrdersService} from '../../../../services/orders/orders.service';

@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.css']
})
export class OrderProductsComponent implements OnChanges {
  @Input() selectedOrder: Order;
  public cartProducts: CartProduct[] = [];

  constructor(private cartProductService: CartProductService, private ordersService: OrdersService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.cartProductService.getCartProducts(this.selectedOrder.id)
      .then((cartProducts: CartProduct[]) => {
        this.cartProducts = cartProducts;
      });
  }

  public isOrdered(){
    return this.selectedOrder.orderStatus === 'ORDERED';
  }

  public clickPlaceOrderButtonListener(): void{
    this.ordersService.updateOrderStatus(this.selectedOrder.id, 'READY')
      .then(() => this.selectedOrder.orderStatus = 'READY')
  }

}
