import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

import { environment } from '../../environments/environment';


declare function require(path: string);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* parametres de configuration */
  private msgBienvenue = environment.default_home_menu_bienvenue;

  /* Images paths */
  imageRecrute = require('assets/images/recrute.jpg');
  imageCanvas2 = require('assets/images/canvas2.png');
  imageCanvas = require('assets/images/canvas.png');
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => { this.users = users; });
  }

}
