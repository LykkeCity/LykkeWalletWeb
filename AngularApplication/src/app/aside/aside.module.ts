import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { SharedModule } from '../shared/shared.module';
import { CashInComponent } from './cash-in/cash-in.component';
import { CashOutComponent } from './cash-out/cash-out.component';
import { SettleComponent } from './settle/settle.component';
import { TradeComponent } from './trade/trade.component';
import { WalletInformationComponent } from './wallet-information/wallet-information.component';
import { LykkeProjectsListComponent } from './lykke-projects-list/lykke-projects-list.component';
import { AsideComponent } from './aside.component';
import { RouterModule } from '@angular/router';
import { ExchangeSpotComponent } from './exchange-spot/exchange-spot.component';

// COMPONENTS

// SERVICES


@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    AsideComponent,
    CashInComponent,
    CashOutComponent,
    SettleComponent,
    TradeComponent,
    WalletInformationComponent,
    LykkeProjectsListComponent,
    ExchangeSpotComponent,
  ],
  entryComponents: [
    CashInComponent,
    CashOutComponent,
    SettleComponent,
    TradeComponent,
    WalletInformationComponent,
    LykkeProjectsListComponent,
    ExchangeSpotComponent
  ],
  exports: [
    AsideComponent
  ],
  providers: []
})
export class AsideModule {}
