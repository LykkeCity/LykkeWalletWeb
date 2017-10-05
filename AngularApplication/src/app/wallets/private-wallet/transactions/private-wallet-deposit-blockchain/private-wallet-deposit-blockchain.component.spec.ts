import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateWalletDepositBlockchainComponent } from './private-wallet-deposit-blockchain.component';

describe('PrivateWalletDepositBlockchainComponent', () => {
  let component: PrivateWalletDepositBlockchainComponent;
  let fixture: ComponentFixture<PrivateWalletDepositBlockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateWalletDepositBlockchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateWalletDepositBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
