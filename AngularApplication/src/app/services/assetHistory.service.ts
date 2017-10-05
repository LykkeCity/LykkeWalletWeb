import { CrudService } from '../services/crud.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/of';
import { NotificationsService } from 'angular2-notifications/dist';

@Injectable()
export class AssetHistoryService extends CrudService {
  _assetHistory: BehaviorSubject<Array<String>> = <BehaviorSubject<String[]>>new BehaviorSubject([]);
  dataStore: Array<any>; // TODO set interface

  public assetHistory: Observable<any>;

  constructor(http: Http, notificationService: NotificationsService) {
    super(http, notificationService);
    this.dataStore = [];
    this.assetHistory = this._assetHistory.asObservable();
  }

  getHistory(assetId) {

    this.get('/History', {assetId}).subscribe(data => {
      const a = {...data};
      this.dataStore = this.parseData(data);
      this._assetHistory.next([...this.dataStore]);
    }, error => console.log('Could not load history for ' + assetId + '.'));
  }

  parseData(data) {
    return data.map(transaction => {
      Object.keys(transaction).forEach((key) => {
        if (transaction[key] == null) {
          delete transaction[key];
        } else {
          if (key !== 'DateTime' && key !==  'Id') {
            transaction.Action = transaction[key];
            transaction.Action.Operation = key;
            delete transaction[key];
          }
        }
      });
      return transaction;
    });
  }

}
