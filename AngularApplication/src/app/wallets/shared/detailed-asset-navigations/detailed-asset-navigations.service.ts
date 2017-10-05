import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CrudService } from '../../../services/crud.service';
import { NotificationsService } from 'angular2-notifications/dist';

@Injectable()
export class DetailedAssetNavigationsService extends CrudService {

  constructor(http: Http, notificationService: NotificationsService) {

    super(http, notificationService);
  }

  /***
   * Get Asset
   * @params (assetId) string
   * @returns Observable
   */
  getAssetById(assetId) {
    return this.get('/Assets/' + assetId);
  }
}
