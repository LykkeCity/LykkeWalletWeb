
import { CrudService } from '../../services/crud.service';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ITradingWallet, TradingWallet } from '../../models/trading-wallet.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { NotificationsService } from 'angular2-notifications/dist';

@Injectable()
export class TradingWalletAssetDetailedService extends CrudService {

  private _convertedCurrency: BehaviorSubject<ITradingWallet>;
  private convertedCurrencyStore: TradingWallet;
  public convertedCurrency: Observable<ITradingWallet>;

  constructor(http: Http, notificationService: NotificationsService) {
    super(http, notificationService);

    this._convertedCurrency = <BehaviorSubject<ITradingWallet>>new BehaviorSubject(new TradingWallet());
    this.convertedCurrencyStore = new TradingWallet();
    this.convertedCurrency = this._convertedCurrency.asObservable();
  }

  /***
   * Get trading wallet all assets
   * @returns Observable
   */
  getTradingWalletById(id) {
    this.get('/Wallets/' + id).subscribe(currency => {
      this.convertedCurrencyStore = currency;
      this._convertedCurrency.next(Object.assign({}, this.convertedCurrencyStore));
    }, error => console.log('Could not load base asset.'));
  }

  getAssetDescription(asset) {
    return this.get('/AllAssetDescription/' + asset);
  }

  getDicts() {
    return this.get('/Dicts/assets');
  }
}
