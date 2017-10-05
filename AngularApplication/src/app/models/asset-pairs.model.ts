export interface IAssetPairsModel {

  Group: string;
  Id: string;
  Name: string;
  Accuracy: number;
  InvertedAccuracy: number;
  BaseAssetId: string;
  QuotingAssetId: string;
  Inverted: boolean;
}

export class AssetPairsModel {

  Group: string;
  Id: string;
  Name: string;
  Accuracy: number;
  InvertedAccuracy: number;
  BaseAssetId: string;
  QuotingAssetId: string;
  Inverted: boolean;

  constructor(Group: string = '',
              Id: string = '',
              Name: string = '',
              Accuracy: number = null,
              InvertedAccuracy: number = null,
              BaseAssetId: string = '',
              QuotingAssetId: string = '',
              Inverted: boolean = false) {

    this.Group = Group;
    this.Id = Id;
    this.Name = Name;
    this.Accuracy = Accuracy;
    this.InvertedAccuracy = InvertedAccuracy;
    this.BaseAssetId = BaseAssetId;
    this.QuotingAssetId = QuotingAssetId;
    this.Inverted = Inverted;
  }
}
