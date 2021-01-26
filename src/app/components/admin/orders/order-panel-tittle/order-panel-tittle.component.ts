import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-order-panel-tittle',
  templateUrl: './order-panel-tittle.component.html',
  styleUrls: ['./order-panel-tittle.component.css']
})
export class OrderPanelTittleComponent {
  @Input() public tittle: string;
  @Output() public clickButtonEvent = new EventEmitter();
  public isButtonShown: boolean;
  public isPanelShown: boolean;

  constructor() {
    this.isButtonShown = window.innerWidth < 768;
    this.isPanelShown = true;
  }

  public onResize(event: any){
    let width: number = event.target.innerWidth;
    let isSmallVersion: boolean = width < 768;
    if(isSmallVersion != this.isButtonShown){
      this.isButtonShown = width < 768;
      this.isPanelShown = true;
    }

  }

  public clickOpenButtonListener(): void{
    this.clickButtonEvent.emit();
    this.isPanelShown = !this.isPanelShown;
  }
}
