import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBookComponent } from './order-book.component';

describe('OrderBookComponent', () => {
  let component: OrderBookComponent;
  let fixture: ComponentFixture<OrderBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
