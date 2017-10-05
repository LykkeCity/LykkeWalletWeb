import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyLykkeComponent } from './my-lykke.component';
import { MyLykkeEquityComponent } from './my-lykke-equity/my-lykke-equity.component';
import { MyLykkeNewsComponent } from './my-lykke-news/my-lykke-news.component';

const routes: Routes = [
  { path: '',
    component: MyLykkeComponent,
    children: [
      { path: '', redirectTo: '/my-lykke/equity', pathMatch: 'full' },
      { path: 'equity', component: MyLykkeEquityComponent},
      { path: 'news', component: MyLykkeNewsComponent}
    ]
  }

];


export const MyLykkeRouting: ModuleWithProviders = RouterModule.forChild(routes);
