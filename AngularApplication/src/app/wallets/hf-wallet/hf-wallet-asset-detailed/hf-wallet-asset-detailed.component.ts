import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hf-wallet-asset-detailed',
  templateUrl: './hf-wallet-asset-detailed.component.html',
  styleUrls: ['./hf-wallet-asset-detailed.component.scss']
})

export class HfWalletAssetDetailedComponent implements OnInit {



  constructor(private location: Location) {
  }

  ngOnInit() {

  }

  onLocationBack() {
    this.location.back();
  }

}
