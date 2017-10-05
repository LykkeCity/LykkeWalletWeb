import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';

import { WalletComponent } from './wallet.component';
import { WalletsRouting } from './wallets-routing.module';

/* Wallet Components */
import { TradingWalletComponent } from './trading-wallet/trading-wallet.component';

import { PrivateWalletComponent } from './private-wallet/private-wallet.component';
import { PrivateWalletListComponent } from './private-wallet/private-wallet-list/private-wallet-list.component';
import { PrivateWalletAssetDetailedComponent } from './private-wallet/private-wallet-asset-detailed/private-wallet-asset-detailed.component';


/* Miscelaneous Components */

import { SharedModule } from '../shared/shared.module';


import { TradingSettleComponent } from './trading-wallet/transactions/trading-wallet-settle/trading-settle.component';
import { TransferAssetDropdownComponent } from './private-wallet/transactions/transfer-asset/transfer-asset-dropdown/transfer-asset-dropdown.component';
import { TransferAssetComponent } from './private-wallet/transactions/transfer-asset/transfer-asset.component';
import { TradingWalletListComponent } from './trading-wallet/trading-list/trading-list.component';
import { AssetHistoryService } from '../services/assetHistory.service';
import { TradingWalletService } from './services/trading-wallet-service';
import { PrivateWalletService } from './services/private-wallet.service';
import { TradingWalletAssetDetailedComponent } from './trading-wallet/trading-wallet-asset-detailed/trading-wallet-asset-detailed.component';
import { TradingWalletDepositSwiftComponent } from './trading-wallet/transactions/trading-wallet-deposit-swift/trading-wallet-deposit-swift.component';
import { TradingWalletDepositBlockchainComponent } from './trading-wallet/transactions/trading-wallet-deposit-blockchain/trading-wallet-deposit-blockchain.component';
import { TradingWalletDepositCreditCardComponent } from './trading-wallet/transactions/trading-wallet-deposit-credit-card/trading-wallet-deposit-credit-card.component';
import { TradingWalletWithdrawSwiftComponent } from './trading-wallet/transactions/trading-wallet-withdraw-swift/trading-wallet-withdraw-swift.component';
import { TradingWalletWithdrawBlockchainComponent } from './trading-wallet/transactions/trading-wallet-withdraw-blockchain/trading-wallet-withdraw-blockchain.component';
import { PrivateWalletDepositBlockchainComponent } from './private-wallet/transactions/private-wallet-deposit-blockchain/private-wallet-deposit-blockchain.component';
import { PrivateWalletWithdrawBlockchainComponent } from './private-wallet/transactions/private-wallet-withdraw-blockchain/private-wallet-withdraw-blockchain.component';

// SHARED COMPONENTS
import { BlockchainTransferComponent } from './shared/transactions-blockchain-transfer/blockchain-transfer.component';
import { DetailedAssetNavigationComponent } from './shared/detailed-asset-navigations/detailed-asset-navigations.component';
import { ListItemCopyComponent } from './shared/list-item-copy/list-item-copy.component';
import { WalletsTransactionsService } from './services/wallets-transactions.service';
import { HfWalletComponent } from './hf-wallet/hf-wallet.component';
import { HfWalletListComponent } from './hf-wallet/hf-wallet-list/hf-wallet-list.component';
import { HfWalletAssetDetailedComponent } from './hf-wallet/hf-wallet-asset-detailed/hf-wallet-asset-detailed.component';
import { HfWalletDetailedComponent } from './hf-wallet/hf-wallet-detailed/hf-wallet-detailed.component';


@NgModule({
  imports: [
    WalletsRouting,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    WalletComponent,
    /// trading wallet
    TradingWalletComponent,
    TradingWalletListComponent,
    TradingWalletAssetDetailedComponent,
    TradingWalletDepositSwiftComponent,
    TradingWalletDepositBlockchainComponent,
    TradingWalletDepositCreditCardComponent,
    TradingWalletWithdrawSwiftComponent,
    TradingWalletWithdrawBlockchainComponent,
    TradingSettleComponent,
    /// wallets shared components
    ListItemCopyComponent,
    BlockchainTransferComponent,
    DetailedAssetNavigationComponent,
    /// private wallet
    PrivateWalletComponent,
    PrivateWalletListComponent,
    PrivateWalletAssetDetailedComponent,
    PrivateWalletDepositBlockchainComponent,
    PrivateWalletWithdrawBlockchainComponent,
    TransferAssetComponent,
    TransferAssetDropdownComponent,
    // high frequency wallet
    HfWalletComponent,
    HfWalletListComponent,
    HfWalletAssetDetailedComponent,
    HfWalletDetailedComponent
    // TODO refactor names to page component and element component
  ],
  providers: [
    // TODO Refactor this to wallets component instance
    AssetHistoryService,
    PrivateWalletService,
    TradingWalletService,
    WalletsTransactionsService
  ]
})
export class WalletsModule {}
