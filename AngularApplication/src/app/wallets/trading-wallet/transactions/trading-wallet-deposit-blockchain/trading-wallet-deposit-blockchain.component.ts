import { Component, OnInit } from '@angular/core';
import { WalletsTransactionsService } from '../../../services/wallets-transactions.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TradingWalletService } from '../../../services/trading-wallet-service';
import { AssetDictsService } from '../../../../services/assets-dicts.service';

@Component({
  selector: 'app-trading-wallet-deposit-blockchain',
  templateUrl: './trading-wallet-deposit-blockchain.component.html',
  styleUrls: ['./trading-wallet-deposit-blockchain.component.scss']
})
export class TradingWalletDepositBlockchainComponent implements OnInit {

  currentAsset: string;
  currentWalletAddress: string;

  constructor(private transactionService: WalletsTransactionsService,
              private route: ActivatedRoute,
              private assetDictsService: AssetDictsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params) {
        this.currentAsset = params['asset'];
      }
    });

    this.assetDictsService.assetDicts.subscribe(dicts => {
      if(dicts.length) {
        const assetDict = dicts.find(dict => dict.Id === this.currentAsset);
        if(assetDict) {
          this.currentWalletAddress = assetDict.BcnDepositAddress;
        } else {
          console.log('invalid asset id');
          // TODO DISPLAY ERROR MESSAGE MAYBE RETURN BACK TO HOME
        }
      }
    });
  }

  onSubmit(eventData) {

    const data = {
      'AssetId': this.currentAsset,
      'BcnAddress': eventData.bcnAddress
    };

    this.transactionService.depositBlockchain(data).subscribe(result => {

      console.log(result);
    });
  }

}

// TODO need 2FA
