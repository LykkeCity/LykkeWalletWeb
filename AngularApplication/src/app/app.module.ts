import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { CurrencyComponent } from './components/header/currency/currency.component';
import { NotificationsComponent } from './components/header/notifications/notifications.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Services
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { BaseAssetService } from './services/base-asset.service';
import { EventService } from './services/event.service';

// 3RD PARTY MODULES

import { SimpleNotificationsModule } from 'angular2-notifications';
import { MomentModule } from 'angular2-moment'; // moment-style pipes for date formatting
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

// APP MODULES
import { SharedModule } from './shared/shared.module';
import { AsideModule } from './aside/aside.module';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { IdleService } from './services/idle.service';
import { SettingsModule } from './settings/settings.module';
import { UserService } from './services/user.service';
import { UserProfileComponent } from './components/header/user-profile/user-profile.component';
import { IssuersService } from './services/issuers.service';
import { AssetDictsService } from './services/assets-dicts.service';
import { WalletsBalanceService } from './services/wallets-ballance.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    NotificationsComponent,
    CurrencyComponent,
    FooterComponent,
    NotFoundComponent,
    AuthenticationComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    AsideModule,
    SimpleNotificationsModule.forRoot(),
    MomentModule,
    NgIdleKeepaliveModule.forRoot(),
    SettingsModule
  ],
  providers: [
    AuthGuard,
    // ConfigService
    AuthService,
    BaseAssetService,
    EventService,
    IdleService,
    UserService,
    IssuersService,
    AssetDictsService,
    WalletsBalanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
