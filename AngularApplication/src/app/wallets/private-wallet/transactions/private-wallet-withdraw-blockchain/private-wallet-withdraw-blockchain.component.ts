import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WalletsTransactionsService } from '../../../services/wallets-transactions.service';

@Component({
  selector: 'app-private-wallet-withdraw-blockchain',
  templateUrl: './private-wallet-withdraw-blockchain.component.html',
  styleUrls: ['./private-wallet-withdraw-blockchain.component.scss']
})
export class PrivateWalletWithdrawBlockchainComponent implements OnInit {

  currentAsset: string;
  constructor(private transactionService: WalletsTransactionsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params) {
        this.currentAsset = params['asset'];
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
