import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', component: AuthenticationComponent},
  { path: 'wallets', loadChildren: 'app/wallets/wallets.module#WalletsModule', canActivate: [AuthGuard] },
  { path: 'exchange', loadChildren: 'app/exchange/exchange.module#ExchangeModule', canActivate: [AuthGuard] },
  { path: 'history', loadChildren: 'app/history/history.module#HistoryModule', canActivate: [AuthGuard]  },
  { path: 'my-lykke', loadChildren: 'app/my-lykke/my-lykke.module#MyLykkeModule', canActivate: [AuthGuard] },
  { path: 'settings', loadChildren: 'app/settings/settings.module#SettingsModule', canActivate: [AuthGuard] },
  { path: '404', component: NotFoundComponent},
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
