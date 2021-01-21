export class Order{
  public id: number;
  public owner: string;
  public orderStatus: string
  public show: boolean;

  constructor(id: number, owner: string, orderStatus: string) {
    this.id = id;
    this.owner = owner;
    this.orderStatus = orderStatus;
    this.show = true;
  }
}
