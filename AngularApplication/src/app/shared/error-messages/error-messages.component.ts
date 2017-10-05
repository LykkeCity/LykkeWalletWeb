import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';

@Component({
  selector: 'app-error-messages',
  template: `<div *ngIf="errorMessage !== null" class="text-danger">* {{errorMessage}}</div>`
})

export class ErrorMessagesComponent {

  @Input() control: FormControl;

  constructor() { }

  get errorMessage() {
    if (this.control && this.control.errors) {
      for (const propertyName in this.control.errors) {
        // if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        if (this.control.errors.hasOwnProperty(propertyName) && (this.control.dirty || this.control.touched)) {
          return FormValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
        }
      }
    }
    return null;
  }
}
