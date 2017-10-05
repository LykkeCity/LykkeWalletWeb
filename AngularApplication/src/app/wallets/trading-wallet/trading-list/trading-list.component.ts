import { Component, OnDestroy, OnInit } from '@angular/core';
import { IBaseAsset } from '../../../models/base-aset.model';
import { TradingWalletService } from '../../services/trading-wallet-service';
import { BaseAssetService } from '../../../services/base-asset.service';
import { DropdownButtonOptions, DropdownGroupItem, DropdownItem } from '../../../models/dropdown.interface';
import { NotificationsService } from 'angular2-notifications/dist';
import { WalletsBalanceService } from '../../../services/wallets-ballance.service';

@Component({
  selector: 'app-trading-list',
  templateUrl: './trading-list.component.html',
  styleUrls: ['./trading-list.component.scss'],
  providers: [TradingWalletService]
})
export class TradingWalletListComponent implements OnInit {

  public userBaseAsset: IBaseAsset;
  public categoriesArr: any;
  public clientBalance: number;


  depositDropdownData: Array<DropdownItem>;
  depositDropdownOptions: object; // TODO set interface
  depositButtonOptions: DropdownButtonOptions;

  withdrawButtonOptions: DropdownButtonOptions;
  withDrawDropdownOptions: object; // TODO set interface
  withDrawDropdownData: Array<DropdownItem>;

  tradingButtonOptions: DropdownButtonOptions;
  tradingDropdownOptions: object; // TODO set interface
  tradingDropdownData: Array<DropdownItem>;

  oterActionsButtonOptions: DropdownButtonOptions;
  oterActionsDropdownOptions: object; // TODO set interface
  oterActionsDropdownData: Array<DropdownItem>;

  FlExampleButtonOptions: DropdownButtonOptions;
  FlExampleDropdownOptions: object; // TODO set interface
  FlExampleDropdownData: Array<DropdownItem>;
  FlExampleFooterLinksData: Array<DropdownItem>;

  assetButtonOptions: DropdownButtonOptions;
  assetDropdownOptions: object; // TODO set interface

  constructor(private tradingWalletsService: TradingWalletService,
              private baseAssetService: BaseAssetService,
              private walletsBalanceService: WalletsBalanceService) {

    this.categoriesArr = [];
    this.clientBalance = null;
  }

  ngOnInit() {
    this.getTradingWalletsData();

    this.walletsBalanceService.walletsBalance.subscribe(walletsBalance => {
      this.clientBalance = walletsBalance.TradingWallet;
    });

    this.baseAssetService.baseAsset.subscribe(asset => {
      this.userBaseAsset = asset;
      this.initDropdowns();
    });
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
    ////////////////////
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
          icon: 'icon--deposit_swift',
          name: 'Swift',
          url: '/wallets/trading/deposit/swift/' + this.userBaseAsset.Name
        },
        {
          icon: 'icon--deposit_bl_transfer',
          name: 'Blockchain Transfer',
          url: '/wallets/trading/deposit/blockchain/' + this.userBaseAsset.Name
        },
        {
          icon: 'icon--deposit_credit_card',
          name: 'Credit Card',
          url: '/wallets/trading/deposit/credit-card/' + this.userBaseAsset.Name
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
        name: 'Swift',
        icon: 'icon--withdraw_swift',
        url: '/wallets/trading/withdraw/swift/' + this.userBaseAsset.Name
      },
      {
        name: 'Blockchain transfer',
        icon: 'icon--withdraw_bl_transfer',
        url: '/wallets/trading/withdraw/blockchain/' + this.userBaseAsset.Name
      }
    ];
    ////////////////////
    this.tradingButtonOptions = {
      buttonText: 'Trading',
      classNames: 'button button-dropdown dropdown-toggle text-uppercase',
      hasIcon: false
    };
    this.tradingDropdownOptions = {
      hasGroups: false
    };
    this.tradingDropdownData = [
      {
        icon: 'icon--trading_sell',
        name: 'Sell',
        url: '/wallets/trading/withdraw/swift/' + this.userBaseAsset.Name
      },
      {
        icon: 'icon--trading_buy',
        name: 'Buy',
        url: '/wallets/trading/withdraw/swift/' + this.userBaseAsset.Name
      }
    ];
    ////////////////////
    this.oterActionsButtonOptions = {
      buttonText: 'other actions',
      classNames: 'button button-dropdown dropdown-toggle text-uppercase',
      hasIcon: false
    };
    this.oterActionsDropdownOptions = {
      hasGroups: false
    };
    this.oterActionsDropdownData = [
      {
        icon: 'icon--settle_coins',
        name: '1-year LKK Forward Settlements',
        url: '/wallets/trading/settle/' + this.userBaseAsset.Name
      },
      {
        icon: 'icon--trading_buy',
        name: 'Buy Lykke Shares',
        url: ''
      }
    ];
    ////////////////////
    this.FlExampleButtonOptions = {
      buttonText: 'Example footer links',
      classNames: 'button button-dropdown dropdown-toggle text-uppercase',
      hasIcon: false
    };
    this.FlExampleDropdownOptions = {
      hasGroups: false,
      hasFooterLinks: true // TODO SET INTERFACE
    };
    this.FlExampleDropdownData = [
      {
        name: '1-year LKK Forward Settlements',
        url: '/wallets/trading/settle/' + this.userBaseAsset.Name
      },
      {
        name: 'Buy Lykke Shares',
        url: ''
      },
      {
        name: 'Buy Lykke Shares',
        url: ''
      },
      {
        name: 'Buy Lykke Shares',
        url: ''
      },
      {
        name: 'Buy Lykke Shares',
        url: ''
      },
      {
        name: 'Buy Lykke Shares',
        url: ''
      }
    ];
    this.FlExampleFooterLinksData = [
      {
        name: 'LINK 1',
        url: '/wallets/trading/settle/' + this.userBaseAsset.Name
      },
      {
        name: 'LINK 2',
        url: ''
      }
    ]
    // this.tradingButtonOptions = {
    //   buttonText: 'trading',
    //   classNames: 'button button-dropdown dropdown-toggle text-uppercase',
    //   hasIcon: false
    // };
    // this.tradingDropdownOptions = {
    //   width: 100,
    //   hasGroups: true
    // };
    // this.tradingDropdownData = [
    //   {
    //     groupName: 'deposite',
    //     items: [
    //       {
    //         name: 'Swift',
    //         url: '/wallets/trading/withdraw/swift/' + this.userBaseAsset.Name
    //       },
    //       {
    //         name: 'Blockchain transfer',
    //         url: '/wallets/trading/withdraw/blockchain' + this.userBaseAsset.Name
    //       }
    //     ]
    //   },
    //   {
    //     groupName: '',
    //     items: [
    //       {
    //         icon: 'icon--deposit_bl_transfer',
    //         name: 'sdsdsdsd',
    //         url: '/wallets/trading/withdraw/swift/' + this.userBaseAsset.Name
    //       },
    //       {
    //         icon: 'icon--deposit_bl_transfer',
    //         name: 'sdsdsdsdsd',
    //         url: '/wallets/trading/withdraw/blockchain' + this.userBaseAsset.Name
    //       }
    //     ]
    //   },
    //   {
    //     groupName: 'withdraw',
    //     items: [
    //       {
    //         icon: 'icon--deposit_bl_transfer',
    //         name: 'buy',
    //         url: '/wallets/trading/withdraw/swift/' + this.userBaseAsset.Name
    //       },
    //       {
    //         icon: 'icon--deposit_bl_transfer',
    //         name: 'sell',
    //         url: '/wallets/trading/withdraw/blockchain' + this.userBaseAsset.Name
    //       }
    //     ]
    //   }
    // ];

  }
  getTradingWalletsData() {
    this.tradingWalletsService.tradingWalletCategories.subscribe(data => {
      this.categoriesArr = data;
    });
  }
}
