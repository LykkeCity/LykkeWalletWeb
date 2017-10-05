import { CrudService } from '../../../../../services/crud.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NotificationsService } from 'angular2-notifications/dist';

@Injectable()
export class TransferAssetDropdownService extends CrudService {

  constructor(http: Http, notificationService: NotificationsService) {
    super(http, notificationService);
  }

  getTradingWalletBalance(baseAsset) {
    return this.get('/Client/balances/' + baseAsset);
  }
  getPrivateWalletBalance() {
    return this.get('/PrivateWallet');
  }
}
