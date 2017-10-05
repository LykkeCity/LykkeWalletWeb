import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingWalletDepositSwiftComponent } from './trading-wallet-deposit-swift.component';

describe('TradingWalletDepositSwiftComponent', () => {
  let component: TradingWalletDepositSwiftComponent;
  let fixture: ComponentFixture<TradingWalletDepositSwiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingWalletDepositSwiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingWalletDepositSwiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
