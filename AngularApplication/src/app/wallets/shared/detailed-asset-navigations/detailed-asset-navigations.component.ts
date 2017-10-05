import { Component, Input, OnInit } from '@angular/core';
import { DetailedAssetNavigationsService } from './detailed-asset-navigations.service';

@Component({
  selector: 'app-detailed-asset-navigation',
  templateUrl: './detailed-asset-navigations.component.html',
  providers: [DetailedAssetNavigationsService]
})
export class DetailedAssetNavigationComponent implements OnInit {

  @Input() assetId: any;
  public asset: any;

  constructor(private detailedAssetNavigationsService: DetailedAssetNavigationsService) {

  }

  ngOnInit() {
    this.detailedAssetNavigationsService.getAssetById(this.assetId).subscribe(asset => {
      this.asset = asset.Asset;
    });
  }
}
