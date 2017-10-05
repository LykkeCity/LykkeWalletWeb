import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingWalletWithdrawSwiftComponent } from './trading-wallet-withdraw-swift.component';

describe('TradingWalletWithdrawSwiftComponent', () => {
  let component: TradingWalletWithdrawSwiftComponent;
  let fixture: ComponentFixture<TradingWalletWithdrawSwiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TradingWalletWithdrawSwiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingWalletWithdrawSwiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
