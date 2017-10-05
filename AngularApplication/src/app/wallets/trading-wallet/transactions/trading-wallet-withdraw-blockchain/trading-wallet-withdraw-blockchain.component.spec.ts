import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingWalletWithdrawBlockchainComponent } from './trading-wallet-withdraw-blockchain.component';

describe('TradingWalletWithdrawBlockchainComponent', () => {
  let component: TradingWalletWithdrawBlockchainComponent;
  let fixture: ComponentFixture<TradingWalletWithdrawBlockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingWalletWithdrawBlockchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingWalletWithdrawBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
