import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-currency-pair',
  templateUrl: './currency-pair.component.html',
  styleUrls: ['./currency-pair.component.scss']
})
export class CurrencyPairComponent implements OnInit {

  @Input() currencyPairList: any;
  @Input() currencyPair: any;
  @Input() assetRates: any;

  public showSelect: boolean;

  constructor(private events: EventService) {

    this.showSelect = false;
    this.events.addEvent('change:exchangeAsset');
  }

  ngOnInit() {}

  openModal() {
    this.showSelect = !this.showSelect;
  }

  onAssetChange(cPair) {

    if (cPair.Name !== this.currencyPair) {
      this.currencyPair = cPair.Name;
      this.showSelect = false;
      this.events.emitEvent('change:exchangeAsset', cPair);
    }
  }

  reverseCurrencyPair(e, currencyPair) {
    e.stopPropagation();
    const cPair = currencyPair.split('/');
    this.currencyPair = cPair[1] + '/' + cPair[0];
    this.events.emitEvent('change:exchangeAsset', {Id: this.currencyPair.replace('/', ''), Name: this.currencyPair});
  }
}
