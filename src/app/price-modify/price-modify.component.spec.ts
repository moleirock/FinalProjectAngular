import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceModifyComponent } from './price-modify.component';

describe('PriceModifyComponent', () => {
  let component: PriceModifyComponent;
  let fixture: ComponentFixture<PriceModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceModifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
