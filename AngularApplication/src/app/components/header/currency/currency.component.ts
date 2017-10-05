import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseAssetService } from '../../../services/base-asset.service';
import { WalletsBalanceService } from '../../../services/wallets-ballance.service';

declare var SimpleScrollbar: any;

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  public baseAssets: any;
  public userBaseAsset: any;
  public showSelect: boolean;
  public clientOverallBalance: number;

  @ViewChild('customSelect') customSelect: ElementRef;

  constructor(private walletsBalanceService: WalletsBalanceService,
              private baseAssetService: BaseAssetService) {

    this.showSelect = false;

    this.baseAssetService.baseAsset.subscribe(asset => {
      if(asset) {
        this.userBaseAsset = asset;
      }
    });

    this.walletsBalanceService.walletsBalance.subscribe(balance => {
      if(balance) {
        this.clientOverallBalance = balance.MarginWallets + balance.PrivateWallets + balance.TradingWallet;
      }
    });

    this.baseAssetService.getAllBaseAssets().subscribe(response => {
      if(response) {
        this.baseAssets = response.Assets;
      }
    });

  }

  ngOnInit() {

  }

  onChangeBaseAsset(asset, index) {

    const newBaseAsset = this.baseAssets[parseInt(index)];
    this.baseAssetService.changeBaseAsset(newBaseAsset);
  }

  onShowCustomSelect(e) {

    e.stopPropagation();
    this.showSelect = !this.showSelect;
    if (this.showSelect) {

      SimpleScrollbar.initEl(this.customSelect.nativeElement);
      this.onCustomSelectClose = this.onCustomSelectClose.bind(this);
      document.addEventListener('click', this.onCustomSelectClose);
    } else {
      this.onCustomSelectClose();
    }
  }

  onCustomSelectClose() {
    document.removeEventListener('click', this.onCustomSelectClose);
    this.showSelect = false;
  }
}
