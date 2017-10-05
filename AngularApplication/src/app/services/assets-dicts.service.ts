import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { NotificationsService } from 'angular2-notifications/dist';
import { AssetDicts } from '../models/asset-dicts.interface';

@Injectable()
export class AssetDictsService extends CrudService {

  _assetDicts: BehaviorSubject<Array<AssetDicts>> = <BehaviorSubject<AssetDicts[]>>new BehaviorSubject([]);
  dataStore: Array<AssetDicts>;

  public assetDicts: Observable<any>;


  constructor(http: Http, notificationService: NotificationsService) {
    super(http, notificationService);
    this.assetDicts = this._assetDicts.asObservable();
    this.getAllAssetDicts();
  }

  getAllAssetDicts() {
    this.get('/Dicts/assets').subscribe(data => {
      this.dataStore = data.Assets;
      this._assetDicts.next([...this.dataStore]);
    }, error => console.log('Could not load asset dicts'));
  }
}
