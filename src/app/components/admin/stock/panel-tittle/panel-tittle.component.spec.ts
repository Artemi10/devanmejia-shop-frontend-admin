import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTittleComponent } from './panel-tittle.component';

describe('PanelTittleComponent', () => {
  let component: PanelTittleComponent;
  let fixture: ComponentFixture<PanelTittleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelTittleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelTittleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
