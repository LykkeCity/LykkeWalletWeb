export interface AssetHistory {
  'Id': 'string';
  'DateTime': 'string';
  'CashInOut': {
    'Id': 'string';
    'Amount': 0;
    'DateTime': 'string';
    'Asset': 'string';
    'IconId': 'string';
    'BlockChainHash': 'string';
    'IsRefund': true;
    'AddressFrom': 'string';
    'AddressTo': 'string';
    'IsSettled': true;
    'Type': 'string';
    'State': 'InProcessOnchain'
  };
  'Trade': {
    'Id': 'string';
    'DateTime': 'string';
    'Asset': 'string';
    'Volume': 0;
    'IconId': 'string';
    'BlockChainHash': 'string';
    'AddressFrom': 'string';
    'AddressTo': 'string';
    'IsSettled': true;
    'State': 'InProcessOnchain';
    'MarketOrder': {
      'Id': 'string';
      'DateTime': 'string';
      'OrderType': 'string';
      'Volume': 0;
      'Price': 0;
      'BaseAsset': 'string';
      'AssetPair': 'string';
      'TotalCost': 0;
      'Comission': 0;
      'Position': 0;
      'Accuracy': 0
    };
    'OrderId': 'string';
    'IsLimitTrade': true
  };
  'Transfer': {
    'Id': 'string';
    'DateTime': 'string';
    'Asset': 'string';
    'Volume': 0;
    'IconId': 'string';
    'BlockChainHash': 'string';
    'AddressFrom': 'string';
    'AddressTo': 'string';
    'IsSettled': true;
    'State': 'InProcessOnchain'
  };
  'CashOutAttempt': {
    'Id': 'string';
    'DateTime': 'string';
    'Asset': 'string';
    'Volume': 0;
    'IconId': 'string'
  };
  'CashOutCancelled': {
    'Id': 'string';
    'DateTime': 'string';
    'Asset': 'string';
    'Volume': 0;
    'IconId': 'string'
  };
  'CashOutDone': {
    'Id': 'string';
    'DateTime': 'string';
    'Asset': 'string';
    'Volume': 0;
    'IconId': 'string'
  };
  'LimitTradeEvent': {
    'Id': 'string';
    'OrderId': 'string';
    'DateTime': 'string';
    'Asset': 'string';
    'AssetPair': 'string';
    'Volume': 0;
    'Price': 0;
    'Status': 'string';
    'Type': 'string';
  };
}
