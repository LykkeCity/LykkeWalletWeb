import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService) {

    this.route.queryParams.subscribe(params => {

      const redirectUrl = localStorage.getItem('returnUrl');

      if (params && params.code && redirectUrl) {
        this.authService.getAccessToken(params.code);
      } else if (!this.authService._isAuthenticated) {
        // TODO return to SSO
        this.router.navigate(['my-lykke']);
      }
    });
  }

  ngOnInit() {
  }

}
