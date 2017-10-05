import { NgModule } from '@angular/core';
import { FormValidationService } from '../services/form-validation.service';
import { QrComponent } from './qr/qr.component';
import { ErrorMessagesComponent } from './error-messages/error-messages.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormSuccessComponent } from './form-success/form-success.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ClickOutsideDirective } from './dropdown/clickOutside.directive';
import { RouterModule } from '@angular/router';
import { PopupComponent } from '../components/popup/popup.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [
    FormValidationService,
  ],
  declarations: [
    QrComponent,
    ErrorMessagesComponent,
    FormSuccessComponent,
    DropdownComponent,
    ClickOutsideDirective,
    PopupComponent,
    TableComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    QrComponent,
    DropdownComponent,
    ErrorMessagesComponent,
    FormSuccessComponent,
    PopupComponent,
    TableComponent,
    ClickOutsideDirective
  ]
})
export class SharedModule {}
