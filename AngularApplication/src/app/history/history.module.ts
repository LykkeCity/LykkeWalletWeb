import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { HistoryRouting } from './history-routing.module';
import { SharedModule } from '../shared/shared.module';

// COMPONENTS
import { HistoryComponent } from './history.component';
import { HistoryFilterComponent } from './history-filter/history-filter.component';

// SERVICES


@NgModule({
  imports: [
    HistoryRouting,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    HistoryComponent,
    HistoryFilterComponent,
  ],
  providers: []
})
export class HistoryModule {}
