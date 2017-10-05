import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateWalletAssetDetailedComponent } from './trading-wallet-asset-detailed.component';

describe('PrivateWalletAssetDetailedComponent', () => {
  let component: PrivateWalletAssetDetailedComponent;
  let fixture: ComponentFixture<PrivateWalletAssetDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateWalletAssetDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateWalletAssetDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
