import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserData } from '../../../models/userdata.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  userData: UserData;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.userData.subscribe(data => {
      this.userData = data;
    });
  }

}
