import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferAssetService } from './transfer-asset.service';
import { BaseAssetService } from '../../../../services/base-asset.service';
import { IBaseAsset } from '../../../../models/base-aset.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../../../services/form-validation.service';

@Component({
  selector: 'app-transfer-asset',
  templateUrl: './transfer-asset.component.html',
  providers: [TransferAssetService]
})
export class TransferAssetComponent implements OnInit {

  public assetName: string;
  public walletsData: object; //TODO add interface
  public selectedTo: object;  //TODO add interface
  public selectedFrom: object;  //TODO add interface
  public baseAsset: IBaseAsset;
  public transferForm: FormGroup;
  public calculatedRate: any;
  public amount: number;

  constructor(private route: ActivatedRoute,
              private transferAssetService: TransferAssetService,
              private baseAssetService: BaseAssetService,
              private fb: FormBuilder) {
    this.route.params.subscribe(param => {
      this.assetName = param.asset;
      this.transferAssetService.getTradingWalletBalance(this.assetName);

    });
  }

  ngOnInit() {
    this.baseAssetService.baseAsset.subscribe(bAsset => {
      if (bAsset.Id) {
        this.baseAsset = bAsset;
        this.getWalletsInfo();
      }
    });

    this.transferAssetService.pairRates.subscribe(rate => {

      if (rate.Id) {
        this.calculatedRate = (((this.amount * 100000000) * (rate.Ask * 100000000)) / 10000000000000000).toFixed(8);
      }
    });
    this.initForm();
  }

  initForm() {
    this.transferForm = this.fb.group({
      transferAmount: ['', [Validators.required, FormValidationService.numberValidator]]
    });
  }

  getWalletsInfo() {
    this.transferAssetService.transferWallets.subscribe(wallets => {
      if (wallets.length > 0) {
        this.walletsData = [...wallets];
        this.selectedTo = this.walletsData[0].walletData[0];
        this.selectedFrom = this.walletsData[1].walletData[0];
      }
    });
  }

  onDataChange(e) {
    if (e.type === 'from') {
      this.selectedTo = e.walletInfo;
    } else if (e.type === 'to') {
      this.selectedFrom = e.walletInfo;
    }
  }

  calculateAmountToBaseAsset(e) {
    // TODO should we have to make a check for the length of the numbers (8) after the floating point.
    this.amount = e.target.value;
    if (!isNaN(this.amount)) {
      const pair = this.assetName + '' + this.baseAsset.Id;
      this.transferAssetService.getAllAssetPairRatesById(pair);
    } else {
      this.calculatedRate = 0;
    }
  }
}
