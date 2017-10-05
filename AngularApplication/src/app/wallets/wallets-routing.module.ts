import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalletComponent } from './wallet.component';

// trading wallet
import { TradingWalletComponent } from './trading-wallet/trading-wallet.component';
import { TradingWalletAssetDetailedComponent } from './trading-wallet/trading-wallet-asset-detailed/trading-wallet-asset-detailed.component';
import { TradingSettleComponent } from './trading-wallet/transactions/trading-wallet-settle/trading-settle.component';
import { TradingWalletListComponent } from './trading-wallet/trading-list/trading-list.component';
import { TradingWalletDepositSwiftComponent } from './trading-wallet/transactions/trading-wallet-deposit-swift/trading-wallet-deposit-swift.component';
import { TradingWalletDepositBlockchainComponent } from './trading-wallet/transactions/trading-wallet-deposit-blockchain/trading-wallet-deposit-blockchain.component';
import { TradingWalletDepositCreditCardComponent } from "./trading-wallet/transactions/trading-wallet-deposit-credit-card/trading-wallet-deposit-credit-card.component";
import { TradingWalletWithdrawSwiftComponent } from './trading-wallet/transactions/trading-wallet-withdraw-swift/trading-wallet-withdraw-swift.component';
import { TradingWalletWithdrawBlockchainComponent } from './trading-wallet/transactions/trading-wallet-withdraw-blockchain/trading-wallet-withdraw-blockchain.component';

// private walllet
import { PrivateWalletComponent } from './private-wallet/private-wallet.component';
import { PrivateWalletListComponent } from './private-wallet/private-wallet-list/private-wallet-list.component';
import { PrivateWalletAssetDetailedComponent } from './private-wallet/private-wallet-asset-detailed/private-wallet-asset-detailed.component';
import { TransferAssetComponent } from './private-wallet/transactions/transfer-asset/transfer-asset.component';
import { PrivateWalletWithdrawBlockchainComponent } from './private-wallet/transactions/private-wallet-withdraw-blockchain/private-wallet-withdraw-blockchain.component';
import { PrivateWalletDepositBlockchainComponent } from './private-wallet/transactions/private-wallet-deposit-blockchain/private-wallet-deposit-blockchain.component';

// high frequency wallet
import { HfWalletComponent } from './hf-wallet/hf-wallet.component';
import { HfWalletListComponent } from './hf-wallet/hf-wallet-list/hf-wallet-list.component';
import { HfWalletAssetDetailedComponent } from './hf-wallet/hf-wallet-asset-detailed/hf-wallet-asset-detailed.component';
import { HfWalletDetailedComponent } from './hf-wallet/hf-wallet-detailed/hf-wallet-detailed.component';

const routes: Routes = [
  { path: '',
    component: WalletComponent,
    children: [
      { path: '', redirectTo: '/wallets/trading', pathMatch: 'full' },
      { path: 'trading',
        component: TradingWalletComponent,
        children: [
          { path: '', component: TradingWalletListComponent},
          { path: ':wallet/:asset', component: TradingWalletAssetDetailedComponent},
          { path: 'deposit/swift/:asset', component: TradingWalletDepositSwiftComponent},
          { path: 'deposit/blockchain/:wallet/:asset', component: TradingWalletDepositBlockchainComponent},
          { path: 'deposit/credit-card/:asset', component: TradingWalletDepositCreditCardComponent},
          { path: 'withdraw/swift/:asset', component: TradingWalletWithdrawSwiftComponent},
          { path: 'withdraw/blockchain/:wallet/:asset', component: TradingWalletWithdrawBlockchainComponent},
          { path: 'settle/:asset', component: TradingSettleComponent},
        ]
      },
      { path: 'private',
        component: PrivateWalletComponent,
        children: [
          { path: '', component: PrivateWalletListComponent },
          { path: ':wallet/:asset', component: PrivateWalletAssetDetailedComponent },
          { path: 'transfer/asset/:asset', component: TransferAssetComponent },
          { path: 'deposit/blockchain/:wallet/:asset', component: PrivateWalletDepositBlockchainComponent},
          { path: 'withdraw/blockchain/:wallet/:asset', component: PrivateWalletWithdrawBlockchainComponent},
        ]
      },
      { path: 'high-frequency',
        component: HfWalletComponent,
        children: [
          { path: '', component: HfWalletListComponent },
          { path: ':wallet/wallet-info', component: HfWalletDetailedComponent },
          { path: ':wallet/wallet-info/wallet-name/:asset', component: HfWalletAssetDetailedComponent }
        ]
      }
    ]
  }
];
export const WalletsRouting: ModuleWithProviders = RouterModule.forChild(routes);
