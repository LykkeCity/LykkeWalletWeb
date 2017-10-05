import { CrudService } from '../../../../services/crud.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NotificationsService } from 'angular2-notifications/dist';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TransferAssetService extends CrudService {

  private _transferWallets: any;
  public transferWallets: Observable<any>;

  private _pairRates: any;
  public pairRates: Observable<any>;

  private transferWalletsStore: any;

  constructor(http: Http, notificationService: NotificationsService) {
    super(http, notificationService);

    this._transferWallets = new BehaviorSubject([]);
    this.transferWallets = this._transferWallets.asObservable();

    this._pairRates = new BehaviorSubject([]);
    this.pairRates = this._pairRates.asObservable();


    this.transferWalletsStore = {
      wallets: [],
      pairRates: {}
    };

  }

  getTradingWalletBalance(assetId) {
    this.get('/Client/balances/' + assetId).subscribe(tradingWalletBalance => {
      const tradingWallet = {
        categoryName: 'trading wallet',
        walletData: [
          {
            walletName: 'My Trading Wallet',
            walletBalance: tradingWalletBalance.TradingWallet.toFixed(8),
            walletAddress: '',
            show: true
          }
        ]
      };

      this.getTradingWalletAdress(assetId, tradingWallet);
    });
  }

  getTradingWalletAdress(assetId, tradingWallet) {
    this.get('/Dicts/assets').subscribe(dicts => {
      tradingWallet.walletData[0].walletAddress = dicts.Assets.filter(dict => dict.Id === assetId)[0]['BcnDepositAddress'];
    });
    this.transferWalletsStore.wallets.push(tradingWallet);
    this.getPrivateWalletBalance();
  }

  getPrivateWalletBalance() {

    this.get('/PrivateWallet').subscribe(privateWallets => {

      const privateWallet = {
        categoryName: 'private wallet',
        walletData: []
      };

      let privateWalletData = {};

      privateWallets.Wallets.map(wallet => {

        privateWalletData = {
          walletName: wallet.Name,
          walletBalance: wallet.Balances.length > 0 ? wallet.Balances[0]['Balance'].toFixed(8) : 0.00000000,
          walletAddress: wallet.Address,
          show: true
        };
        privateWallet.walletData.push(privateWalletData);
      });

      this.transferWalletsStore.wallets.push(privateWallet);
      this._transferWallets.next(this.transferWalletsStore.wallets.slice());
    });
  }

  getAllAssetPairRatesById(pair) {
    this.get('/AllAssetPairRates/' + pair).subscribe(rate => {
      this.transferWalletsStore.pairRates = rate.Rate;
      this._pairRates.next({...this.transferWalletsStore.pairRates});
    });
  }
}
// TODO set validation for max amount
// TODO need 2FA
// TODO awaiting for design approval
