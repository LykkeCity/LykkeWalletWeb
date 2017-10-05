import { CrudService } from '../../services/crud.service';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Wallet } from '../../models/private-wallet.interface';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { NotificationsService } from 'angular2-notifications/dist';
import { AssetDictsService } from '../../services/assets-dicts.service';
import { IssuersService } from '../../services/issuers.service';

@Injectable()
export class PrivateWalletService extends CrudService {
  _wallets: BehaviorSubject<Array<Wallet>> = <BehaviorSubject<Wallet[]>>new BehaviorSubject([]);
  dataStore: Array<Wallet>;

  public wallets: Observable<any>;

  constructor(http: Http,
              notificationService: NotificationsService,
              private issuersService: IssuersService) {
    super(http, notificationService);
    this.dataStore = [];
    this.getData();
    this.wallets = this._wallets.asObservable();

  }

  getData() {
    this.get('/PrivateWallet').subscribe(wallets => {
      this.transformData(wallets.Wallets)
    }, error => console.log('Could not load private wallets.'));
  }

  transformData(wallets) {
    this.issuersService.issuers.subscribe(issuers => {
      if(issuers.length) {
        wallets.map(wallet => {
          wallet.Balances.map(asset => {
            // TODO HANDLE ERROR ON FIND
            asset.Issuer = issuers.find(issuer => issuer.Id === asset.AssetId);
            asset.dropdownData = {
              Id: asset.AssetId,
              BlockchainDeposit: true,
              SwiftWithdrawal: true
            }
          })
        });
        this.emitData(wallets);
      }
    });
  }

  emitData(wallets) {
    this.dataStore = wallets;
    this._wallets.next([...this.dataStore]);
  }
  clearData() {
    this.dataStore = [];
  }

  getById(id) {
    return Observable.of(this.dataStore[id]);
  }

  getWallets() {
    return this.get('/PrivateWallet');
  }
  getWallet(id) {
    return this.get('/PrivateWallet/' + id);
  }
}
