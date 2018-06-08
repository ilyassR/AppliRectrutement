import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

declare function require(path: string);
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   private msgHomeLabel = environment.default_home_label;
    private msgHomeMenuResult = environment.default_home_menu_result;
    private msgHomeMenuCandidats = environment.default_home_menu_candidats;
    private msgHomeMenuTests = environment.default_home_menu_tests;
    private msgHomeMenuDeconnexion = environment.default_home_menu_deco;

    imageLogo = require('assets/images/logo.png');
  
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  onLogout() {
    this.authService.logout();
  }

}
