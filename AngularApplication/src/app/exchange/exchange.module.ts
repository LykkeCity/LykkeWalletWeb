import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { ExchangeRouting } from './exchange-routing.module';
import { SharedModule } from '../shared/shared.module';

// COMPONENTS
import { ExchangeComponent } from './exchange.component';
import { CurrencyPairComponent } from './currency-pair/currency-pair.component';
import { BuySellFormComponent } from './buy-sell-form/buy-sell-form.component';

// SERVICES
import { ExchangeService } from './exchange.service';
import { OrderBookComponent } from './order-book/order-book.component';
import { TradingviewComponent } from './tradingview/tradingview.component';
import { AssetInfoComponent } from './asset-info/asset-info.component';
import { RatingModule } from "ngx-rating";


@NgModule({
  imports: [
    ExchangeRouting,
    ReactiveFormsModule,
    SharedModule,
    RatingModule
  ],
  declarations: [
    ExchangeComponent,
    CurrencyPairComponent,
    BuySellFormComponent,
    OrderBookComponent,
    TradingviewComponent,
    AssetInfoComponent
  ],
  providers: [
    ExchangeService,
  ]
})
export class ExchangeModule {}
