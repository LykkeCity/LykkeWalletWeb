import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserData } from '../models/userdata.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  userData: UserData;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.userData.subscribe(data => {
      this.userData = data;
    });
  }

}
