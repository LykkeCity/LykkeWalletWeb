export interface ITradingWallet {
  Id: string;
  Name: string;
  Balance: number;
  Symbol: string;
  AssetPairId: string;
  HideIfZero: boolean;
  IssuerId: string;
  Accuracy: number;
  CategoryId: string;
  AmountInBase: number;
  Reserved: number;
  qr: string;
}

export class TradingWallet {
  Id: string;
  Name: string;
  Balance: number;
  Symbol: string;
  AssetPairId: string;
  HideIfZero: boolean;
  IssuerId: string;
  Accuracy: number;
  CategoryId: string;
  AmountInBase: number;
  Reserved: number;
  qr: string;

  constructor(Id: string = '',
              Name: string = '',
              Balance: number = null,
              Symbol: string = '',
              AssetPairId: string = '',
              HideIfZero: boolean = false,
              IssuerId: string = '',
              Accuracy: number = null,
              CategoryId: string = '',
              AmountInBase: number = null,
              Reserved: number = null,
              qr: string = '') {

    this.Id = Id;
    this.Name = Name;
    this.Balance = Balance;
    this.Symbol = Symbol;
    this.AssetPairId = AssetPairId;
    this.HideIfZero = HideIfZero;
    this.IssuerId = IssuerId;
    this.Accuracy = Accuracy;
    this.CategoryId = CategoryId;
    this.AmountInBase = AmountInBase;
    this.Reserved = Reserved;
    this.qr = qr;
  }
}
