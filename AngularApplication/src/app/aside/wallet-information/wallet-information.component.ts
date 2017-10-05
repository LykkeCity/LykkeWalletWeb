import { Component, Input, OnInit } from '@angular/core';
import { Wallet } from '../../models/private-wallet.interface';

@Component({
  selector: 'app-wallet-information',
  templateUrl: './wallet-information.component.html',
  styleUrls: ['./wallet-information.component.scss']
})
export class WalletInformationComponent implements OnInit {

  wallet: Wallet;

  @Input('data') data: any;

  constructor() { }

  ngOnInit() {
    this.wallet = this.data;
  }
}
