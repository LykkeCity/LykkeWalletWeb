import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-in',
  templateUrl: './cash-in.component.html'
})
export class CashInComponent implements OnInit{
  @Input() data: any;
  constructor() {

  }

  ngOnInit() { }
}
