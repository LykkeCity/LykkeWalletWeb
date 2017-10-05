import { FormControl, FormGroup } from '@angular/forms';
export class FormValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      'required': 'Required',
      'invalidEmailAddress': 'Invalid email address.',
      'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
      'invalidCompare': 'Password does not match the confirm password.',
      'invalidPhone': 'Phone number must be in following format: +XXXXXXXXXX.',
      'minlength': `Minimum length ${validatorValue.requiredLength}.`,
      'invalidNumber': 'Please insert a valid number value.'
    };

    return config[validatorName];
  }


  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control && (control.value == null || control.value.length === 0 )) {
      return null;
    } else if (control.value && control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  static passwordValidator(control) {
    // {6,100}           - Assert password is between 6 and 100 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value && control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }

  // static phoneValidator(control) {
  //   if (control && (control.value == null || control.value.length === 0 )) {
  //     return null;
  //   } else if (control.value && control.value.indexOf('+') !== -1 && control.value.length >= 11) {
  //     return null;
  //   } else {
  //     return { 'invalidPhone': true };
  //   }
  // }

  static passwordCompareValidator(control) {
    if (control._parent && control._parent.controls.password.value && control._parent.controls.password.value === control._parent.controls.passwordConfirm.value) {
      return null;
    } else {
      return { 'invalidCompare': true };
    }
  }
  static numberValidator(control) {
    // RFC 2822 compliant regex
    if (control && !isNaN(control.value)) {
      return null;
    } else {
      control.setErrors({ 'invalidNumber': true });
      return { 'invalidNumber': true };
    }
  }

  static validate(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validate(control);
      }
    });
  }
}
