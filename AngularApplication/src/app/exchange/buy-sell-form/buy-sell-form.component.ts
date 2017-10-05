import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';

@Component({
  selector: 'app-buy-sell-form',
  templateUrl: './buy-sell-form.component.html',
  styleUrls: ['./buy-sell-form.component.scss']
})
export class BuySellFormComponent implements OnInit, OnChanges {

  @Input() assetPair: string;
  @Input() type: string;
  @Input() urlAsset: any;
  @Input() assetRates: any;

  public firstAsset: string;
  public secondAsset: string;
  public buySellForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.getInputsAsset();
    this.initForm();
  }

  ngOnChanges() {
    this.getInputsAsset();
  }

  showExchangeForm(el, activeEl, type) {

    this.type = type;
    activeEl.classList.remove('active');
    el.classList.add('active');
    this.buySellForm.reset();
    this.router.navigate([], { relativeTo: this.route, queryParams: {type: this.type} });
  }

  getInputsAsset() {
    this.firstAsset = this.assetPair.split('/')[0];
    this.secondAsset = this.assetPair.split('/')[1];
    if (this.buySellForm) {
      this.buySellForm.reset();
    }
  }

  initForm() {
    this.buySellForm = this.fb.group({
      assetAmount: [null, [Validators.required, FormValidationService.numberValidator]],
      assetRate: [null, [Validators.required, FormValidationService.numberValidator]],
      assetPairCalculation: [null, [Validators.required, FormValidationService.numberValidator]],
    });
  }

  onSubmit() {
    if (this.buySellForm.valid) {
      // TODO send data to API and 2FA
      // this.buySellForm.reset();
    } else {
      FormValidationService.validate(this.buySellForm);
    }
  }

  calculateAssetsAmount() {

    const assetAmount = this.buySellForm.value.assetAmount;

    if (!isNaN(assetAmount) && assetAmount !== '') {

      const buyOrSellRate = this.type === 'buy' ? this.assetRates.Bid: this.assetRates.Ask;
      const assetPairCalculation = ((assetAmount * 100000000) * (buyOrSellRate * 100000000)) / 10000000000000000;

      this.buySellForm.patchValue({assetRate: buyOrSellRate, assetPairCalculation: assetPairCalculation.toFixed(8)});

    } else {
      this.buySellForm.patchValue({assetRate: 0, assetPairCalculation: 0});
    }

  }
}

// TODO if pair data doesn't exist show massage in input trading pair not available
