import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingWalletComponent } from './trading-wallet.component';

describe('TradingWalletComponent', () => {
  let component: TradingWalletComponent;
  let fixture: ComponentFixture<TradingWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
