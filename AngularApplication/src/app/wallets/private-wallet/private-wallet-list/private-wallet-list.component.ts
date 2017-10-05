import { Component, OnInit } from '@angular/core';
import { Wallet } from '../../../models/private-wallet.interface';
import { PrivateWalletService } from '../../services/private-wallet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../../../services/event.service';
import { DropdownButtonOptions, DropdownItem } from '../../../models/dropdown.interface';
import { IBaseAsset } from '../../../models/base-aset.model';
import { BaseAssetService } from '../../../services/base-asset.service';
import { WalletsBalanceService } from '../../../services/wallets-ballance.service';

@Component({
  selector: 'app-private-wallet-list',
  templateUrl: './private-wallet-list.component.html',
  styleUrls: ['./private-wallet-list.component.scss']
})
export class PrivateWalletListComponent implements OnInit {

  userBaseAsset: IBaseAsset;
  walletBalance: number;

  walletsList: Array<Wallet>; // add subscribiton and unsubscribe of service

  depositDropdownData: Array<DropdownItem>;
  depositDropdownOptions: object; // TODO set interface
  depositButtonOptions: DropdownButtonOptions;

  withdrawButtonOptions: DropdownButtonOptions;
  withDrawDropdownOptions: object; // TODO set interface
  withDrawDropdownData: Array<DropdownItem>;

  assetButtonOptions: DropdownButtonOptions;
  assetDropdownOptions: object; // TODO set interface

  constructor(private privateWalletService: PrivateWalletService,
              private baseAssetService: BaseAssetService,
              private eventService: EventService,
              private walletsBalanceService: WalletsBalanceService,
              private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.privateWalletService.wallets.subscribe(result => {
      if (result.length) {
        this.walletsList = result;
      }
    });
    this.baseAssetService.baseAsset.subscribe(asset => {

      this.userBaseAsset = asset;
      this.initDropdowns();
    });
    this.walletsBalanceService.walletsBalance.subscribe(balance => {
     Object.keys(balance).length ? this.walletBalance = balance.PrivateWallets : this.walletBalance == undefined;
    })
  }

  initDropdowns() {
    this.assetButtonOptions = {
      buttonText: '',
      classNames: 'button',
      hasIcon: true,
      iconClass: 'icon--actions'
    };
    this.assetDropdownOptions = {
      hasGroups: true
    };
    //////////////
    this.depositButtonOptions = {
      buttonText: 'deposit',
      classNames: 'button button-dropdown dropdown-toggle text-uppercase',
      hasIcon: false
    };
    this.depositDropdownOptions = {
      width: 100,
      hasFilter: true,
      hasGroups: false
    };
    this.depositDropdownData = [
      {
        icon: 'icon--deposit_bl_transfer',
        name: 'Blockchain Transfer',
        url: '/wallets/private/deposit/blockchain/' + this.userBaseAsset.Name
      }
    ];
    ////////////////////
    this.withdrawButtonOptions = {
      buttonText: 'withdraw',
      classNames: 'button button-dropdown dropdown-toggle text-uppercase',
      hasIcon: false
    };
    this.withDrawDropdownOptions = {
      hasGroups: false
    };
    this.withDrawDropdownData = [
      {
        name: 'Blockchain transfer',
        icon: 'icon--withdraw_bl_transfer',
        url: '/wallets/private/withdraw/blockchain/' + this.userBaseAsset.Name
      }
    ];
  }
  onShowWalletDetails(data) {
    this.eventService.emitEvent('open:aside', { direction: 'from-right', operation: 'walletDetails', data} );
  }
}

