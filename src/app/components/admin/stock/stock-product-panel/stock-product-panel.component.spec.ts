import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProductPanelComponent } from './stock-product-panel.component';

describe('StockProductPanelComponent', () => {
  let component: StockProductPanelComponent;
  let fixture: ComponentFixture<StockProductPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockProductPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockProductPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
