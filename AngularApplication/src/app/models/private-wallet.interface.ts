export interface Wallet {
  'Address': string;
  'Name': string;
  'EncodedPrivateKey': string;
  'IsColdStorage': boolean;
  'SmallIconUrl': string;
  'MediumIconUrl': string;
  'LargeIconUrl': string;
  'Balances': Array<WalletBalance>;
}

export interface WalletBalance {
  'AssetId': string;
  'Balance': number;
  'BaseAssetId': string;
  'AmountInBase': number;
}
