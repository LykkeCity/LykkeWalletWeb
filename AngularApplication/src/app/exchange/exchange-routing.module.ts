import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeComponent } from './exchange.component';



const routes: Routes = [
  { path: '',
    component: ExchangeComponent,
  },
  { path: ':assetId',
    component: ExchangeComponent,
  }
];


export const ExchangeRouting: ModuleWithProviders = RouterModule.forChild(routes);
