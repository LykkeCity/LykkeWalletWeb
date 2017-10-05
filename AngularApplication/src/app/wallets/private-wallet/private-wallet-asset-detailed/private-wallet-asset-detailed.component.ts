import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrivateWalletService } from '../../services/private-wallet.service';
import { Location } from '@angular/common';
import { AssetHistoryService } from '../../../services/assetHistory.service';
import { EventService } from '../../../services/event.service';
import { IAsideEvent } from '../../../models/aside.interface';

@Component({
  selector: 'app-private-wallet-asset-detailed',
  templateUrl: './private-wallet-asset-detailed.component.html',
  styleUrls: ['./private-wallet-asset-detailed.component.scss']
})

export class PrivateWalletAssetDetailedComponent implements OnInit {

  asset: any;
  assetHistory: any;
  params: any = {};


  constructor(private route: ActivatedRoute,
              private privateWalletService: PrivateWalletService,
              private location: Location,
              private router: Router,
              private eventService: EventService,
              private assetHistoryService: AssetHistoryService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params) {
        this.params.walletName = params.wallet.replace(/-/g,' ');
        this.params.assetId = params.asset;
        this.getAsset(this.params.walletName, this.params.assetId);
      }
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

  getAsset(walletName, assetId) {

    this.privateWalletService.wallets.subscribe(result => {
      if (result.length) {
        // TODO HANDLE ERROR ON FIND
        this.asset = result.find(wallet => wallet.Name === walletName).Balances.find(asset => asset.AssetId === assetId);
        this.getHistory(this.params.AssetId);
      }
    });
  }

  onAssetDetails(operation, data) {
    const eventData: IAsideEvent = {direction: 'from-right', operation, data};
    this.eventService.emitEvent('open:aside',  eventData);
  }
  getHistory(assetId) {
    this.assetHistoryService.getHistory(assetId);
  }
}

// TODO awaiting for history endpoint from API v2
