import { CrudService } from '../../services/crud.service';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { NotificationsService } from 'angular2-notifications/dist';

@Injectable()
export class WalletsTransactionsService extends CrudService {


  constructor(http: Http, notificationService: NotificationsService) {
    super(http, notificationService);
  }

  depositSwift(data) {
    return this.post('/BankTransferRequest', data);
  }

  depositBlockchain(data) {
    return this.post('/EmailMeWalletAddress', data);
  }

  withdrawSwift(data) {
    return this.post('/CashOutSwiftRequest', data);
  }
  // TODO RESEARCH AND ADD TRANSACTION ENDPOINTS HERE
}
