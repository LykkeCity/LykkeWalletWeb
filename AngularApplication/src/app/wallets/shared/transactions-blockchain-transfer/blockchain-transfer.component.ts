import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidationService } from '../../../services/form-validation.service';


@Component({
  selector: 'app-blockchain-transfer',
  templateUrl: './blockchain-transfer.component.html'
})
export class BlockchainTransferComponent implements OnInit {

  @Input() assetName: string;
  @Input() walletAddress: string;
  @Input() type: string;
  @Output() blockChainSubmitEvent = new EventEmitter<any>();

  blockchainForm: FormGroup;
  // public assetName: string;

  // add event emmiter for submit, add inputs, add outputs
  constructor(private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder) {
  }

  ngOnInit() {
      if (this.type !== 'deposit') {
        this.initForm();
      }
  }

  initForm() {
    this.blockchainForm = this.fb.group({
        'BcnAddress': ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.type !== 'deposit') {
      if (this.blockchainForm.valid) {
        this.blockChainSubmitEvent.emit(this.blockchainForm.value);
      } else {
        FormValidationService.validate(this.blockchainForm);
      }
    } else {
      this.blockChainSubmitEvent.emit(this.walletAddress);
    }

  }

  onLocationBack() {
    this.location.back();
  }
}
// TODO need 2FA
