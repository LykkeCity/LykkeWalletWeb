import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { MyLykkeRouting } from './my-lykke-routing.module';
import { SharedModule } from '../shared/shared.module';

// COMPONENTS
import { MyLykkeComponent } from './my-lykke.component';
import { MyLykkeEquityComponent } from './my-lykke-equity/my-lykke-equity.component';
import { MyLykkeNewsComponent } from './my-lykke-news/my-lykke-news.component';
import { MyLykkeService } from './my-lykke.service';


@NgModule({
  imports: [
    MyLykkeRouting,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    MyLykkeComponent,
    MyLykkeEquityComponent,
    MyLykkeNewsComponent,
  ],
  providers: [MyLykkeService]
})
export class MyLykkeModule {}
