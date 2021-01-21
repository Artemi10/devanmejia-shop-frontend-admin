import {CartProduct} from './cart-product.model';

export class OrderCartProduct{
  cartProductsDTO:CartProduct[];
  orderStatus:string;

  constructor(cartProductsDTO: CartProduct[], orderStatus:string) {
    this.cartProductsDTO = cartProductsDTO;
    this.orderStatus = orderStatus;
  }


}
