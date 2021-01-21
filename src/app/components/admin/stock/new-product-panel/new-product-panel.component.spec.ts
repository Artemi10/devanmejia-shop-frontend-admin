import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductPanelComponent } from './new-product-panel.component';

describe('NewProductPanelComponent', () => {
  let component: NewProductPanelComponent;
  let fixture: ComponentFixture<NewProductPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProductPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
