export interface IAside {
  operationName: string;
  componentName: object;
  dataStore: boolean;
  hideBreadcrumb?: boolean;
}
export interface IAsideEvent {
  direction: string;
  operation: string;
  data: object;
}
