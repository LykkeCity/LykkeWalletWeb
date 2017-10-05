import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ExchangeService } from '../exchange.service';

@Component({
  selector: 'app-asset-info',
  templateUrl: './asset-info.component.html',
  styleUrls: ['./asset-info.component.scss']
})
export class AssetInfoComponent implements OnInit, OnChanges {

  @Input() assetId: string;
  public assetInfo: object;
  public ratingCount: number;

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {}

  ngOnChanges() {
    this.getAssetDescripton();
  }

  getAssetDescripton() {
    this.exchangeService.getAssetInfo(this.assetId).subscribe(assetData => {
      this.assetInfo = assetData;
      this.ratingCount = assetData.PopIndex;
    });
  }
}
