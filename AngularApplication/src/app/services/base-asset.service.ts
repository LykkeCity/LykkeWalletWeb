import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { BaseAsset, IBaseAsset } from '../models/base-aset.model';
import { NotificationsService } from 'angular2-notifications/dist';

@Injectable()
export class BaseAssetService extends CrudService {

  private _baseAsset: BehaviorSubject<IBaseAsset>;
  private baseAssetStore: any;
  public baseAsset: Observable<IBaseAsset>;

  constructor(http: Http, notificationService: NotificationsService) {

    super(http, notificationService);

    this._baseAsset = <BehaviorSubject<IBaseAsset>>new BehaviorSubject(new BaseAsset());
    this.baseAssetStore = new BaseAsset();
    this.baseAsset = this._baseAsset.asObservable();

    if (this.baseAssetStore) {
      this.setBaseAsset();
    }
  }

  /***
   * Set user Base Asset from API (currency)
   * @returns Observable
   */
  setBaseAsset() {
    this.get('/BaseAsset').subscribe(asset => {
      this.baseAssetStore = asset.Asset;
      this._baseAsset.next(Object.assign({}, this.baseAssetStore));
    }, error => console.log('Could not load base asset.'));
  }

  /***
   * Change user base currency
   * @param baseAsset {Object}
   * returns Observable
   */
  changeBaseAsset(baseAsset) {
    this.post('/BaseAsset', baseAsset).subscribe(asset => {
      this.baseAssetStore = asset.Asset;
      this._baseAsset.next(Object.assign({}, this.baseAssetStore));
    }, error => console.log('Could not post base asset'));
  }

  getAllBaseAssets() {
    return this.get('/BaseAssets');
  }
}
