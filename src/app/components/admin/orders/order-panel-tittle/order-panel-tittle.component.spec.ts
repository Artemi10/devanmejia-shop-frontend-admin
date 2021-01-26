import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPanelTittleComponent } from './order-panel-tittle.component';

describe('OrderPanelTittleComponent', () => {
  let component: OrderPanelTittleComponent;
  let fixture: ComponentFixture<OrderPanelTittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPanelTittleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPanelTittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
