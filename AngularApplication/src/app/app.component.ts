import { Component, OnInit } from '@angular/core';
import { IdleService } from './services/idle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  options: object;

  constructor(private idleService: IdleService) {

    this.options = {
      timeOut: 2800,
      clickToClose: true,
      maxLength: 0,
      maxStack: 1,
      showProgressBar: true,
      pauseOnHover: true,
      animate: 'fromRight',
      position: ['top', 'right']
    };
  }

  ngOnInit() {
    this.idleService.init();
  }
}
