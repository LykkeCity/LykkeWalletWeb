import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../../../services/form-validation.service';
import { WalletsTransactionsService } from '../../../services/wallets-transactions.service';

@Component({
  selector: 'app-trading-wallet-withdraw-swift',
  templateUrl: './trading-wallet-withdraw-swift.component.html',
  styleUrls: ['./trading-wallet-withdraw-swift.component.scss']
})
export class TradingWalletWithdrawSwiftComponent implements OnInit {

  public assetName: string;
  swiftForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder,
              private transactionService: WalletsTransactionsService) {
    this.route.params.subscribe(param => {
      this.assetName = param.asset;
    });
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    // {
    //   "Bic": "string",
    //   "AssetId": "string",
    //   "AccNumber": "string",
    //   "AccName": "string",
    //   "Amount": 0,
    //   "BankName": "string",
    //   "AccHolderAddress": "string"
    // };

    this.swiftForm = this.fb.group({
      'Amount': ['', [Validators.required, FormValidationService.numberValidator]],
      'Bic': ['', Validators.required],
      'AccName': ['', Validators.required],
      'AccNumber': ['', Validators.required],
      'BankName': ['', Validators.required],
      'AccHolderAddress': ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.swiftForm.valid) {

      const data = {...this.swiftForm.value};
      data.AssetId = this.assetName;

      this.transactionService.withdrawSwift(data).subscribe(result => {
        console.log(result);
      })
    } else {
      FormValidationService.validate(this.swiftForm);
    }
  }

  onLocationBack() {
    this.location.back();
  }
}

// TODO need 2FA
