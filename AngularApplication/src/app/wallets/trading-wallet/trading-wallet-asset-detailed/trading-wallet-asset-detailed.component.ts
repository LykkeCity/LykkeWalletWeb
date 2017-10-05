import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AssetHistoryService } from '../../../services/assetHistory.service';
import { BaseAssetService } from '../../../services/base-asset.service';
import { IBaseAsset } from '../../../models/base-aset.model';
import { TradingWalletAssetDetailedService } from '../../services/trading-wallet-asset-detailed.service';
import { IAsideEvent } from '../../../models/aside.interface';
import { EventService } from '../../../services/event.service';

@Component({
  selector: 'app-trading-wallet-asset-detailed',
  templateUrl: './trading-wallet-asset-detailed.component.html',
  styleUrls: ['./trading-wallet-asset-detailed.component.scss'],
  providers: [TradingWalletAssetDetailedService]
})

export class TradingWalletAssetDetailedComponent implements OnInit {

  asset: any;
  assetHistory: any;
  params: any = {};
  userBaseAsset: IBaseAsset;
  convertedCurrency: any;
  assetDescription: any;
  qrCode: string;


  constructor(private route: ActivatedRoute,
              private location: Location,
              private baseAssetService: BaseAssetService,
              private eventService: EventService,
              private tradingWalletAssetDetailedService: TradingWalletAssetDetailedService,
              private assetHistoryService: AssetHistoryService) {
    this.assetHistory = null;
  }

  ngOnInit() {

    this.baseAssetService.baseAsset.subscribe(asset => {
      this.userBaseAsset = asset;
      this.getConvertedCurrency(this.asset);
    });

    this.route.params.subscribe(params => {
      if (params) {
        this.asset = params.asset.toUpperCase();
        this.getHistory(this.asset);
        this.getConvertedCurrency(this.asset);
        this.getAllAssetDescription(this.asset);
        this.tradingWalletAssetDetailedService.getDicts().subscribe(dicts => {
          this.qrCode = dicts.Assets.filter(dict => dict.Id === this.asset)[0]['BcnDepositAddress'];
        });
      }
    });

    this.tradingWalletAssetDetailedService.convertedCurrency.subscribe(currency => {
      this.convertedCurrency = currency.Balance;
    });

    this.assetHistoryService.assetHistory.subscribe(result => {
      if (result.length) {
        this.assetHistory = result;
      }
    });
  }

  onLocationBack() {
    this.location.back();
  }

  onAssetDetails(operation, data) {
    const eventData: IAsideEvent = {direction: 'from-right', operation, data};
    this.eventService.emitEvent('open:aside',  eventData);
  }

  getHistory(assetId) {
    this.assetHistoryService.getHistory(assetId);
  }

  getConvertedCurrency(assetId) {
    this.tradingWalletAssetDetailedService.getTradingWalletById(assetId);
  }

  getAllAssetDescription(assetId) {
    this.tradingWalletAssetDetailedService.getAssetDescription(assetId).subscribe(description => {
      this.assetDescription = description;
    });
  }
}
// TODO need new history endpoint from API v2
