import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateWalletWithdrawBlockchainComponent } from './private-wallet-withdraw-blockchain.component';

describe('PrivateWalletWithdrawBlockchainComponent', () => {
  let component: PrivateWalletWithdrawBlockchainComponent;
  let fixture: ComponentFixture<PrivateWalletWithdrawBlockchainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateWalletWithdrawBlockchainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateWalletWithdrawBlockchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
