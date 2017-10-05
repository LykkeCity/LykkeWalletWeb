import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-transfer-asset-dropdown',
  templateUrl: './transfer-asset-dropdown.component.html'
})
export class TransferAssetDropdownComponent implements OnInit {

  @Input() data: any; // TODO add interface
  @Input() type: string;
  @Input() selectedData: object;
  @Input() secondSelectedData: object;
  @Input() baseAsset: object;
  @Input() urlAssetName: string;

  @Output() changeWallet = new EventEmitter();

  public showHideDropdown: boolean;
  public walletsData: any;

  constructor() {

    this.showHideDropdown = false;
  }

  ngOnInit() {
    this.walletsData = [...this.data];
    console.log(this.walletsData);

  }

  displayDropdown() {
    this.showHideDropdown = !this.showHideDropdown;
  }

  changeInputData(walletInfo) {
    this.selectedData = walletInfo;
    this.showHideDropdown = false;
    this.changeWallet.emit({walletInfo, type: this.type});
  }

  closeDropdown() {
    this.showHideDropdown = false;
  }

  filterWallets(e) {
    console.log(e.target.value);
    const filterVal = e.target.value;
    let walletFilteredData = [];
    if (filterVal.length > 1) {
      this.walletsData.map(wallets => {
        wallets.walletData.filter(wallet => {
          if (wallet.walletAddress.indexOf(e.target.value) == 0) {
            walletFilteredData.push({categoryName: wallets.categoryName, walletData: [wallet]});
          }
        })
      });
      if (walletFilteredData.length > 0) {

        this.walletsData = walletFilteredData;
        console.log(this.walletsData);

      } else {
        this.walletsData = [{categoryName: 'no wallets', walletData: []}];
      }
    } else if (filterVal.length === 0) {
      this.walletsData = [...this.data];
    }
  }
}

