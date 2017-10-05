import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { SuccessMessageConfig } from "../../models/successConfig.interface";
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-success',
  templateUrl: './form-success.component.html',
  styleUrls: ['./form-success.component.scss']
})
export class FormSuccessComponent implements OnInit, OnDestroy{
  _showMessage: boolean;
  messageConfig: SuccessMessageConfig;

  constructor(private eventService: EventService,
              private location: Location) {
    this._showMessage = false;
    this.bindEvents();
  }

  ngOnInit() {
    this.eventService.subscribeToEvent('success:show', this.onMessageOpen.bind(this));
    this.eventService.subscribeToEvent('success:hide', this.onMessageClose.bind(this));
  }

  ngOnDestroy() {
    this.onMessageClose();
  }

  bindEvents() {
    this.eventService.addEvent('success:show');
    this.eventService.addEvent('success:hide');
  }

  onMessageOpen(data: SuccessMessageConfig) {
    this.messageConfig = data;
    this._showMessage = true;
  }

  onMessageClose() {
    this.messageConfig = null;
    this._showMessage = false;
  }

  onLocationBack() {
    this.location.back();
  }
}
