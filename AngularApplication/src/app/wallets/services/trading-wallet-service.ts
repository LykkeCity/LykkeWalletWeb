import { CrudService } from '../../services/crud.service';
import _ from 'lodash';
import { Injectable, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { ITradingWallet, TradingWallet } from '../../models/trading-wallet.model';
import { NotificationsService } from 'angular2-notifications/dist';
import { IssuersService } from '../../services/issuers.service';
import { BaseAssetService } from '../../services/base-asset.service';
import { AssetDictsService } from '../../services/assets-dicts.service';

@Injectable()
export class TradingWalletService extends CrudService {

  private _tradingWalletCategories: BehaviorSubject<Array<ITradingWallet>>;
  private tradingWalletCategoriesStore: TradingWallet[];
  public tradingWalletCategories: Observable<Array<ITradingWallet>>;

  constructor(http: Http,
              notificationService: NotificationsService,
              private issuersService: IssuersService,
              private baseAssetService: BaseAssetService,
              private assetDictsService: AssetDictsService) {
    super(http, notificationService);

    this._tradingWalletCategories = <BehaviorSubject<Array<ITradingWallet>>>new BehaviorSubject([]);
    this.tradingWalletCategoriesStore = [];
    this.tradingWalletCategories = this._tradingWalletCategories.asObservable();

    if (this.tradingWalletCategories) {
      this.convertTradingWalletData();
    }
  }
  /***
   * Get trading wallet all assets
   * @returns Observable
   */
  getTradingWallets() {
    return this.get('/Wallets');
  }

  getAllAssetsCategory() {
    return this.get('/assetcategories');
  }

  convertTradingWalletData() {
    this.getTradingWallets().subscribe(response => {

      const obj = response.Lykke.Assets;
      this.addBaseAssets(obj);
    }, error => console.log('Could not load trading wallets'));
  }

  addBaseAssets(obj) {
    const newObjData = [];

    this.assetDictsService.assetDicts.subscribe(dicts => {
      if(dicts.length) {
        dicts.map(asset => {
            obj.map(data => {
              if (data.Id === asset.Id) {
                data['baseAssetData'] = asset;
                newObjData.push(data);
              }
            });
          });
      }
      const grouped = _.mapValues(_.groupBy(newObjData, 'CategoryId'));
      this.convertAssets(grouped);
    }, error => console.log('Could not load asset dicts'));;
  }

  convertAssets(grouped) {
    this.getAllAssetsCategory().subscribe(categories => {

      const arr = [];

      categories.AssetCategories.map(category => {

        if (grouped[category.Id]) {

          const categoryAndData = {
            categoryName: category.Name,
            categoryData: grouped[category.Id]
          };

          arr.push(categoryAndData);
        }
      });

      this.addIssuers(arr);

    }, error => console.log('Could not load base asset.'));
  }

  addIssuers(categoryArray) {
    this.issuersService.issuers.subscribe(issuers => {

      categoryArray.map(category => {
          category.categoryData.map(catData => {
            issuers.map(issuer => {
              if (issuer.Id === catData.IssuerId) {
                catData['Issuer'] = issuer.Name;
                catData['IconUrl'] = issuer.IconUrl;
              }
            });
          });
      });
      this.emitWallets(categoryArray);
    });
  }

  emitWallets(wallets) {
    this.tradingWalletCategoriesStore = wallets;
    this._tradingWalletCategories.next(this.tradingWalletCategoriesStore.slice());
  }
}
