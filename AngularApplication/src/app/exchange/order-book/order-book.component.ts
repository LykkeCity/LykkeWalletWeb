import { Component, Input, OnInit } from '@angular/core';
import { IAsideEvent } from '../../models/aside.interface';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-order-book',
  templateUrl: './order-book.component.html',
  styleUrls: ['./order-book.component.scss']
})
export class OrderBookComponent implements OnInit {

  @Input() orderBookData: any;
  @Input() pairRates: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {}

  onAssetDetails() {
    const eventData: IAsideEvent = {direction: 'from-right', operation: 'ExchangeSpot', data: {data: '1'}};
    this.eventService.emitEvent('open:aside',  eventData);
  }
}
