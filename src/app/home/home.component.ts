import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

import { AppComponent } from '../app.component';

declare function require(path: string);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* parametres de configuration */
  private msgBienvenue = environment.default_home_menu_bienvenue;
  private msgWelcomeAuthUser: string;

  /* Images paths */
  imageRecrute = require('assets/images/recrute.jpg');
  imageCanvas2 = require('assets/images/canvas2.png');
  imageCanvas = require('assets/images/canvas.png');
  currentUser: User;
  users: User[] = [];

  constructor(
    private userService: UserService
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadUser();
  //  this.userService.currentPrincipalUser.subscribe(message => this.msgWelcomeAuthUser = message);
  //  this.userService.changeMessage(this.msgWelcomeAuthUser);
    //this.msgWelcomeAuthUser = this.msgWelcomeAuthUser + localStorage.getItem('userPrincipal');
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadUser() {
    this.userService.getUser().subscribe( res => {
      localStorage.setItem('userPrincipal', `${res.firstName} ${res.lastName}[${res.authorities[0].authority}]`);
    }
    );
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

}
