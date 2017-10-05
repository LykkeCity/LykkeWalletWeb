import { CrudService } from '../services/crud.service';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { NotificationsService } from 'angular2-notifications/dist';

@Injectable()
export class MyLykkeService extends CrudService {

  private _lykkeEquity: any;
  public lykkeEquity: Observable<any>;

  private _lykkeNews: any;
  public lykkeNews: Observable<any>;

  private lykkeStore: any;

  constructor(http: Http, notificationService: NotificationsService) {
    super(http, notificationService);

    this._lykkeEquity = new BehaviorSubject([]);
    this.lykkeEquity = this._lykkeEquity.asObservable();

    this._lykkeNews = new BehaviorSubject([]);
    this.lykkeNews = this._lykkeNews.asObservable();


    this.lykkeStore = {
      news: [],
      equity: {}
    };
    this.getLkkNews(30);
    this.getLkkEquity();
  }

  getLkkNews(skip) {
    this.get('/LykkeNews', {skip, take: 5}).subscribe(news => {

      this.lykkeStore.news = this.lykkeStore.news.concat(news);
      this._lykkeNews.next(this.lykkeStore.news.slice());
    });
  }

  getLkkEquity() {
    this.get('/MyLykkeInfo').subscribe(equity => {

      this.lykkeStore.equity = equity;
      this._lykkeEquity.next({...this.lykkeStore.equity});
    });
  }
}
