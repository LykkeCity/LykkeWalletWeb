import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormValidationService } from '../../../../services/form-validation.service';

@Component({
  selector: 'app-trading-wallet-deposit-credit-card',
  templateUrl: './trading-wallet-deposit-credit-card.component.html',
  styleUrls: ['./trading-wallet-deposit-credit-card.component.scss']
})
export class TradingWalletDepositCreditCardComponent implements OnInit {

  public assetName: string;
  public creditCardForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private location: Location) {
    this.initForm();
    this.route.params.subscribe(param => {
      this.assetName = param.asset;
    });

  }

  ngOnInit() {

  }

  initForm() {

    this.creditCardForm = this.fb.group({
      assetAmount: ['', [Validators.required, FormValidationService.numberValidator]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, FormValidationService.emailValidator]],
    });
  }

  onSubmit() {
    // TODO connect with third party service for credit card validation
    if (this.creditCardForm.valid) {
      this.creditCardForm.reset();
    } else {
      // TODO FIND TRANSACTION ENDPOINT
      FormValidationService.validate(this.creditCardForm);
    }
  }

  onLocationBack() {
    this.location.back();
  }

}
