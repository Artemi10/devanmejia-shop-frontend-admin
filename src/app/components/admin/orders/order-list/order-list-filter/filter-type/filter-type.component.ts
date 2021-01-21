import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-filter-type',
  templateUrl: './filter-type.component.html',
  styleUrls: ['./filter-type.component.css']
})
export class FilterTypeComponent {
  @Input() public filterTypeName: string;
  public isFilterTypeSelected: boolean;
  @Output() public changeFilterFlagEvent = new EventEmitter();

  constructor() {
    this.isFilterTypeSelected = true;
  }

  public changeFilterFlag(){
    this.isFilterTypeSelected = !this.isFilterTypeSelected;
    this.changeFilterFlagEvent.emit(this.filterTypeName.toUpperCase());
  }


}
