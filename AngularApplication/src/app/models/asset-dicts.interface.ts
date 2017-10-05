export interface AssetDicts {
  "Id": string;
  "BlockchainId": string;
  "Name": string;
  "Symbol": string;
  "IdIssuer": string;
  "Accuracy": 0,
  "HideWithdraw": boolean,
  "HideDeposit": boolean,
  "DefaultOrder": 0,
  "KycNeeded": boolean,
  "CategoryId": string;
  "VisaDeposit": boolean,
  "SwiftDeposit": boolean,
  "BlockchainDeposit": boolean,
  "BuyScreen": boolean,
  "SellScreen": boolean,
  "BlockchainWithdrawal": boolean,
  "SwiftWithdrawal": boolean,
  "ForwardWithdrawal": boolean,
  "CrosschainWithdrawal": boolean,
  "BcnDepositAddress": string;
  "ForwardBaseAsset": string;
  "ForwardFrozenDays": 0,
  "ForwardMemoUrl": string;
  "IconUrl": string;
  "DisplayId": string;
  "Blockchain": string;
  "Description": {
    "Id": string;
    "AssetClass": string;
    "PopIndex": 0,
    "Description": string;
    "IssuerName": string;
    "NumberOfCoins": string;
    "MarketCapitalization": string;
    "AssetDescriptionUrl": string;
    "FullName": string;
  }
}
