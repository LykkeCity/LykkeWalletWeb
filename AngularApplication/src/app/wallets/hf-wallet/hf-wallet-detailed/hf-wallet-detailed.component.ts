import { Component, OnInit } from '@angular/core';
import { DropdownButtonOptions } from '../../../models/dropdown.interface';

@Component({
  selector: 'app-hf-wallet-detailed',
  templateUrl: './hf-wallet-detailed.component.html',
  styleUrls: ['./hf-wallet-detailed.component.scss']
})
export class HfWalletDetailedComponent implements OnInit {
  assetButtonOptions: DropdownButtonOptions;
  assetDropdownOptions: object; // TODO set interface

  constructor() { }

  ngOnInit() {
    console.log('WALLET DETAILED')
    this.assetButtonOptions = {
      buttonText: '',
      classNames: 'button',
      hasIcon: true,
      iconClass: 'icon--actions'
    };
    this.assetDropdownOptions = {
      hasGroups: true
    };
  }

}
