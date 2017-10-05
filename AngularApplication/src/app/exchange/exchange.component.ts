import { Component, OnInit } from '@angular/core';
import { ExchangeService } from './exchange.service';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';
import { BaseAssetService } from '../services/base-asset.service';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {

  public pairs: any;
  public firstPair: string;
  public type: string;
  public assetId: string;
  public assetRates: object;
  public orders: any;
  public splitPairsArr: Array<string>;

  constructor(private  exchangeService: ExchangeService,
              private route: ActivatedRoute,
              private events: EventService,
              private baseAsset: BaseAssetService) {

    this.splitPairsArr = [];

    this.route.params.subscribe(routeParams => {
      this.baseAsset.baseAsset.subscribe(bAsset => {

        if (bAsset.Id !== '') {
          this.assetId = routeParams.assetId ? routeParams.assetId : 'BTC';
          this.firstPair = this.assetId + '/' + bAsset.Id;
          this.splitPairsArr = [this.assetId, bAsset.Id];
          this.exchangeService.getAssetPairs(this.assetId);
        }
      });
    });

    this.route.queryParams.subscribe(queryParams => {
      this.type = queryParams.type ? queryParams.type : 'buy';
    });
  }

  ngOnInit() {

    this.exchangeService.assetPairs.subscribe(pairs => {
      if (pairs.length) {

        this.pairs = pairs;
        this.exchangeService.getAllAssetPairRates(this.firstPair.replace('/', ''));
        this.exchangeService.getOrderBook(this.firstPair.replace('/', ''));
      }
    });

    this.exchangeService.assetPairRates.subscribe(assetRates => {
      this.assetRates = assetRates;
    });

    this.exchangeService.orderBook.subscribe(orders => {
      this.orders = orders;
    });

    this.onAssetChange = this.onAssetChange.bind(this);
    this.events.subscribeToEvent('change:exchangeAsset', this.onAssetChange);
  }

  onAssetChange(e) {
    this.orders = null;
    this.firstPair = e.Name;
    this.splitPairsArr = e.Name.split('/');
    this.exchangeService.getAllAssetPairRates(e.Id);
    this.exchangeService.getOrderBook(e.Id);
  }
}

// TODO if url asset is equal to user base asset change url asset to other asset (ETH or BTC)
// TODO display loader to the whole page
