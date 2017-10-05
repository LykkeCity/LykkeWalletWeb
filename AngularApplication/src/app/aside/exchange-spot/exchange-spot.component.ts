import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exchange-spot',
  templateUrl: './exchange-spot.component.html',
  styleUrls: ['./exchange-spot.component.scss']
})
export class ExchangeSpotComponent implements OnInit {


  @Input('data') data: any;

  constructor() { }

  ngOnInit() {}

}
