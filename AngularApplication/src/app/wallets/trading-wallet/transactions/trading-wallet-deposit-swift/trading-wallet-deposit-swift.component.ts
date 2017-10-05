import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WalletsTransactionsService } from '../../../services/wallets-transactions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../../../services/form-validation.service';
@Component({
  selector: 'app-trading-wallet-deposit-swift',
  templateUrl: './trading-wallet-deposit-swift.component.html',
  styleUrls: ['./trading-wallet-deposit-swift.component.scss']
})
export class TradingWalletDepositSwiftComponent implements OnInit {

  public assetName: string;
  depositForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private walletsTransactions: WalletsTransactionsService,
              private fb: FormBuilder) {

    this.route.params.subscribe(param => {
      this.assetName = param.asset;
    });
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.depositForm = this.fb.group({
      swiftAmount: ['', [Validators.required, FormValidationService.numberValidator]]
    });
  }

  onSubmit() {
    if(this.depositForm.valid) {
      const data = {
        'AssetId': this.assetName,
        'BalanceChange': this.depositForm.value.swiftAmount
      };
      this.walletsTransactions.depositSwift(data).subscribe(result => {
        // TODO SET DO SOMEHTING (SUCCESS COMPONENT)
      });
    } else {
      FormValidationService.validate(this.depositForm);
    }

  }
  onLocationBack() {
    this.location.back();
  }
}

// TODO need 2FA
