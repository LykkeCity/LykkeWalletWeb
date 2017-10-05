export interface IBaseAsset {
  Id: string;
  Name: string;
  Accuracy: number;
  Symbol: string;
  HideWithdraw: boolean;
  HideDeposit: boolean;
  KycNeeded: boolean;
  BankCardsDepositEnabled: boolean;
  SwiftDepositEnabled: boolean;
  BlockchainDepositEnabled: boolean;
  CategoryId: string;
}

export class BaseAsset {
  Id: string;
  Name: string;
  Accuracy: number;
  Symbol: string;
  HideWithdraw: boolean;
  HideDeposit: boolean;
  KycNeeded: boolean;
  BankCardsDepositEnabled: boolean;
  SwiftDepositEnabled: boolean;
  BlockchainDepositEnabled: boolean;
  CategoryId: string;

  constructor(Id: string = '',
              Name: string = '',
              Accuracy: number = null,
              Symbol: string = '',
              HideWithdraw: boolean = false,
              HideDeposit: boolean = false,
              KycNeeded: boolean = false,
              BankCardsDepositEnabled: boolean = false,
              SwiftDepositEnabled: boolean = false,
              BlockchainDepositEnabled: boolean = false,
              CategoryId: string = '') {

    this.Id = Id;
    this.Name = Name;
    this.Accuracy = Accuracy;
    this.Symbol = Symbol;
    this.HideWithdraw = HideWithdraw;
    this.HideDeposit = HideDeposit;
    this.KycNeeded = KycNeeded;
    this.BankCardsDepositEnabled = BankCardsDepositEnabled;
    this.SwiftDepositEnabled = SwiftDepositEnabled;
    this.BlockchainDepositEnabled = BlockchainDepositEnabled;
    this.CategoryId = CategoryId;

  }
}
