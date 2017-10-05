import { Component, OnInit } from '@angular/core';
import { MyLykkeService } from '../my-lykke.service';

@Component({
  selector: 'app-my-lykke-info',
  templateUrl: './my-lykke-equity.component.html',
  styleUrls: ['./my-lykke-equity.component.scss']
})
export class MyLykkeEquityComponent implements OnInit {

  public lkkData: object;

  constructor(private myLykkeService: MyLykkeService) { }

  ngOnInit() {

    this.myLykkeService.lykkeEquity.subscribe(equity => {
      this.lkkData = equity;
    });

  }

}
