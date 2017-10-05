import { CrudService } from '../services/crud.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AssetPairsModel, IAssetPairsModel } from '../models/asset-pairs.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { NotificationsService } from 'angular2-notifications/dist';

@Injectable()
export class ExchangeService extends CrudService {

  private _assetPairs: any;
  public assetPairs: Observable<any>;

  private _assetPairRates: any;
  public assetPairRates: Observable<any>;

  private _orderBook: any;
  public orderBook: Observable<any>;

  private assetPairsStore: any;

  constructor(http: Http, notificationService: NotificationsService) {
    super(http, notificationService);

    this._assetPairs = new BehaviorSubject([]);
    this.assetPairs = this._assetPairs.asObservable();

    this._assetPairRates = new BehaviorSubject([]);
    this.assetPairRates = this._assetPairRates.asObservable();

    this._orderBook = new BehaviorSubject([]);
    this.orderBook = this._orderBook.asObservable();


    this.assetPairsStore = {
      filteredAssets: [],
      allAssets: [],
      allAssetPairRates: {},
      orderBook: {}
    };

    // this.getAssetPairs('BTC');
  }

  getAssetPairs(asset) {

    this.get('/AssetPairs').subscribe(pairs => {
      this.filterAssets(asset, pairs.AssetPairs);
    }, error => console.log('Could not load base asset.'));
  }

  filterAssets(asset, data=[]) {

    const pairData = data.length > 0 ? data : this.assetPairsStore['pair'];
    this.assetPairsStore.filteredAssets = [];

    pairData.map(pair => {
      if (pair.BaseAssetId === asset) {
        this.assetPairsStore.filteredAssets.push(pair);
      }
    });

    this.assetPairsStore.allAssets = data;
    this._assetPairs.next(this.assetPairsStore.filteredAssets.slice());

  }

  filterByAsset(asset) {
    this.assetPairsStore.allAssets.map(pair => {

    });
  }

  getAllAssetPairRates(assetPair) {
    this.get('/AllAssetPairRates/' + assetPair).subscribe(assetRates => {

      // Check for assetRates if not exist in the database - bid and ask are set to 0
      const assetRatesValue = assetRates ? assetRates.Rate: {Bid: 0, Ask: 0};
      this.assetPairsStore.allAssetPairRates = assetRatesValue;
      this._assetPairRates.next({...this.assetPairsStore.allAssetPairRates});
    }, error => console.log('Could not load base asset.'));
  }

  getOrderBook(assetPair) {
    this.get('/OrderBook/' + assetPair).subscribe(orders => {

      this.assetPairsStore.orderBook = orders;
      this._orderBook.next({...this.assetPairsStore.orderBook});
    }, error => console.log('Could not load base asset.'));
  }

  getAssetInfo(assetId) {
    return this.get('/AllAssetDescription/' + assetId);
  }
}
