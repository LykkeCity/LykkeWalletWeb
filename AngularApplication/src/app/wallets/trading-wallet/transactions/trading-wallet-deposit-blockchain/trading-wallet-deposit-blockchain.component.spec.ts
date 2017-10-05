import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingWalletDepositBlockchainComponent } from './trading-wallet-deposit-blockchain.component';

describe('TradingWalletDepositBlockchainComponent', () => {
  let component: TradingWalletDepositBlockchainComponent;
  let fixture: ComponentFixture<TradingWalletDepositBlockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingWalletDepositBlockchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingWalletDepositBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
