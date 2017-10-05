import { Component, OnInit } from '@angular/core';
import { WalletsTransactionsService } from '../../../services/wallets-transactions.service';
import { ActivatedRoute } from '@angular/router';
import { PrivateWalletService } from '../../../services/private-wallet.service';

@Component({
  selector: 'app-private-wallet-deposit-blockchain',
  templateUrl: './private-wallet-deposit-blockchain.component.html',
  styleUrls: ['./private-wallet-deposit-blockchain.component.scss']
})
export class PrivateWalletDepositBlockchainComponent implements OnInit {

  currentAsset: string;
  currentWallet: string;
  currentWalletAddress:string;

  constructor(private transactionService: WalletsTransactionsService,
              private privateWalletService: PrivateWalletService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params) {
        this.currentAsset = params['asset'];
        this.currentWallet = params['wallet'].replace(/-/g,' ');
      }
    });

    this.privateWalletService.wallets.subscribe(wallets => {
      if(wallets.length) {
        // TODO HANDLE ERROR ON FIND
        this.currentWalletAddress = wallets.find(wallet => wallet.Name === this.currentWallet).Address;
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
