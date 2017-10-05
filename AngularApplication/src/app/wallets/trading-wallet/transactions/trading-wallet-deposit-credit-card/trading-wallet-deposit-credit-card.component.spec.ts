import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingWalletDepositCreditCardComponent } from './trading-wallet-deposit-credit-card.component';

describe('TradingWalletDepositCreditCardComponent', () => {
  let component: TradingWalletDepositCreditCardComponent;
  let fixture: ComponentFixture<TradingWalletDepositCreditCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingWalletDepositCreditCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingWalletDepositCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
