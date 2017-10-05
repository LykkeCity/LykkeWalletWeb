import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { PopupConfig } from '../../models/popup.interface';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  showPopup: boolean;
  popupConfig: PopupConfig;
  elementBody: any;

  constructor(private eventService: EventService) {
    this.elementBody = document.querySelector('body');
    this.showPopup = false;
    this.bindEvents();
  }

  ngOnInit() {
    this.eventService.subscribeToEvent('popup:open', this.onPopupOpen.bind(this));
    this.eventService.subscribeToEvent('popup:close', this.onPopupClose.bind(this));
  }

  bindEvents() {
    this.eventService.addEvent('popup:open');
    this.eventService.addEvent('popup:close');
    this.eventService.addEvent('popup:confirm');
    this.eventService.addEvent('popup:cancel');
  }

  onPopupOpen(data: PopupConfig) {
    this.showPopup = true;
    this.popupConfig = data;
    this.elementBody.classList.add('blur-popup');
  }

  onPopupClose(data) {
    this.showPopup = false;
    this.popupConfig = null;
    this.elementBody.classList.remove('blur-popup');
  }

  onPopupCancel() {
    this.eventService.emitEvent('popup:cancel', {name: this.popupConfig.name});
  }
  onPopupConfirm() {
    this.eventService.emitEvent('popup:confirm', {name: this.popupConfig.name});
  }
}
