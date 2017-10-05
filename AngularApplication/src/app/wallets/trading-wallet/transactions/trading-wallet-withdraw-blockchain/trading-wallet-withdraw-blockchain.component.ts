import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalletsTransactionsService } from '../../../services/wallets-transactions.service';

@Component({
  selector: 'app-trading-wallet-withdraw-blockchain',
  templateUrl: './trading-wallet-withdraw-blockchain.component.html',
  styleUrls: ['./trading-wallet-withdraw-blockchain.component.scss']
})
export class TradingWalletWithdrawBlockchainComponent implements OnInit {
  currentAsset: string;

  constructor(private transactionService: WalletsTransactionsService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if (params) {
        this.currentAsset = params['asset'];
      }
    });
  }

  ngOnInit() {

  }

  onSubmit(eventData) {
    // TODO FIND API ENDPOINT
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
