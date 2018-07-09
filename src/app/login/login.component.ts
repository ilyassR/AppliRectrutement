import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService, UserService } from '../_services/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
        this.loadUser();
      },
      error => {
        console.log("error");
        this.alertService.error(error);
        this.loading = false;
      });
  }

  private loadUser() {
    this.userService.getUser().subscribe( res => {
      localStorage.setItem('userPrincipal', `${res.firstName} ${res.lastName}[${res.authorities[0].authority}]`);
      localStorage.setItem('userRole', `${res.authorities[0].authority}`);
      console.log(localStorage.getItem('userRole'));
    }
    );
  }
}
