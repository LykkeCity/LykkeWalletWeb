import { Component, Input, OnChanges } from '@angular/core';
import { EventService } from '../../services/event.service';
import { DropdownButtonOptions } from '../../models/dropdown.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnChanges{

  @Input() buttonOptions: DropdownButtonOptions;
  @Input() dropdownOptions: any;
  @Input() dropdownData: any;
  @Input() footerLinksData: any;
  @Input() walletName: string; //wallet name if needed in asset dropdown links

  isOpen: boolean;

  constructor(private eventService: EventService) {
  }
  // TODO add default options for each @input

  ngOnChanges() {
    if(this.walletName) {
      this.walletName = this.walletName.replace(/\s/g, '-');
    }
  }
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  closeDropdown() {
    this.isOpen = false;
  }
}
