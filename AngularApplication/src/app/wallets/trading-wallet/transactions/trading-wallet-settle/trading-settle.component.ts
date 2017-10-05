import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../../../services/form-validation.service';
import { WalletsTransactionsService } from '../../../services/wallets-transactions.service';
import { Location } from '@angular/common';
import { EventService } from '../../../../services/event.service';
import { SuccessMessageConfig } from '../../../../models/successConfig.interface';

@Component({
  selector: 'app-trading-settle',
  templateUrl: './trading-settle.component.html'
})
export class TradingSettleComponent implements OnInit {

  public assetName: string;
  settleForm: FormGroup;
  _showForm: boolean;
  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private eventService: EventService,
              private walletsTransactions: WalletsTransactionsService,
              private location: Location) {
    this._showForm = true;
    this.route.params.subscribe(param => {
      this.assetName = param.asset;
    });
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.settleForm = this.fb.group({
      swiftAmount: ['', [Validators.required, FormValidationService.numberValidator]]
    });
  }
  onSubmit() {
    if(this.settleForm.valid) {
      const messageConfig: SuccessMessageConfig = {
        messageText: 'Funds were transfered to your trading wallet',
        transactionAmount: '- 20 USD',
        infoButtons: [''],
        backButtonText: 'Go back to Asset details'
      };

      this.eventService.emitEvent('success:show', messageConfig);
      this._showForm = false;
      // TODO FIND TRANSACTION ENDPOINT
    } else {
      FormValidationService.validate(this.settleForm);
    }
  }
  onLocationBack() {
    this.location.back();
  }
}
