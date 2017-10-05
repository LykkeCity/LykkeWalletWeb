import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { NotificationsService } from 'angular2-notifications/dist';
import { CrudService } from './crud.service';
import { WalletsBalance } from "../models/wallets-balance.interface";
import { BaseAssetService } from './base-asset.service';

@Injectable()
export class WalletsBalanceService extends CrudService {

  _walletsBalance: BehaviorSubject<WalletsBalance> = <BehaviorSubject<WalletsBalance>>new BehaviorSubject({});
  dataStore: any;

  public walletsBalance: Observable<any>;


  constructor(http: Http,
              notificationService: NotificationsService,
              private baseAssetService: BaseAssetService) {

    super(http, notificationService);
    this.walletsBalance = this._walletsBalance.asObservable();

    this.baseAssetService.baseAsset.subscribe(baseAsset => {
      if(baseAsset.Id) {
        this.getWalletsBalance(baseAsset.Id)
      }
    })
  }

  getWalletsBalance(assetId) {
    this.resetWalletBalance();

    this.get('/Client/balances/' + assetId).subscribe(data => {
      this.dataStore = data;
      this._walletsBalance.next({...this.dataStore});
    }, error => console.log('Could not load wallets balance'));
  }

  resetWalletBalance() {
    this.dataStore = {};
    this._walletsBalance.next({...this.dataStore});
  }
}
