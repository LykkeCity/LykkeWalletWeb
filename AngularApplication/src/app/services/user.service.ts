import { Injectable } from '@angular/core';
import { CrudService } from './crud.service';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { NotificationsService } from 'angular2-notifications/dist';
import { UserData } from '../models/userdata.interface';

@Injectable()
export class UserService extends CrudService {

  _userData: BehaviorSubject<UserData> = <BehaviorSubject<UserData>>new BehaviorSubject({});
  dataStore: UserData;

  public userData: Observable<any>;


  constructor(http: Http, notificationService: NotificationsService) {
    super(http, notificationService);
    this.userData = this._userData.asObservable();
    this.getUserInfo();
  }

  getUserInfo() {
    this.get('/PersonalData ').subscribe(data => {
      this.dataStore = data;
      this._userData.next({...this.dataStore});
    }, error => console.log('Could not load user data.'));
  }
}
