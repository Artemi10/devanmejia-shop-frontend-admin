import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-panel-tittle',
  templateUrl: './panel-tittle.component.html',
  styleUrls: ['./panel-tittle.component.css']
})
export class PanelTittleComponent {
  @Input() public tittle: string;
  @Output() public clickButtonEvent = new EventEmitter();
  public isButtonShown: boolean;
  public isPanelShown: boolean;

  constructor() {
    this.isButtonShown = window.innerWidth < 576;
    this.isPanelShown = true;
  }

  public onResize(event: any){
    let isSmallVersion: boolean = event.target.innerWidth < 576;
    if(isSmallVersion != this.isButtonShown){
      this.isButtonShown = event.target.innerWidth < 576;
      this.isPanelShown = true;
    }

  }

  public clickOpenButtonListener(): void{
    this.clickButtonEvent.emit();
    this.isPanelShown = !this.isPanelShown;
  }
}
