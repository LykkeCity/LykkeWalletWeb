export interface DropdownButtonOptions {
  'buttonText': string;
  'classNames': string;
  'hasIcon': boolean;
  'iconClass'?: string;
}
export interface DropdownOptions {
  width: number;
  hasFilter?: boolean;
  hasGroups?: boolean;
}

export interface DropdownGroupItem {
  groupName: string;
  items: Array<DropdownItem>;
}

export interface DropdownItem {
  name: string;
  url: string;
  icon?:  string;
}

