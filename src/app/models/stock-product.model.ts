export class StockProduct{
  public productName: string;
  public amount: number;
  public price: number;

  constructor(productName: string, amount: number, price: number) {
    this.productName = productName;
    this.amount = amount;
    this.price = price;
  }
}
