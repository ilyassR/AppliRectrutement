import { Component } from '@angular/core';
import { environment } from '../environments/environment';

declare function require(path: string);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Accueil';
    private msgHomeLabel = environment.default_home_label;
    private msgHomeMenuResult = environment.default_home_menu_result;
    private msgHomeMenuCandidats = environment.default_home_menu_candidats;
    private msgHomeMenuTests = environment.default_home_menu_tests;
    private msgHomeMenuDeconnexion = environment.default_home_menu_deco;
    private msgHomeFooter = environment.default_home_footer;

    imageLogoTwitter = require('assets/images/logo_twitter.png');
    imageLogoLinkedin = require('assets/images/logo_linkedin.png');
    imageLogoYoutube = require('assets/images/logo_youtube.png');
    imageLogoRss = require('assets/images/logo_rss.png');
    imageLogoFB = require('assets/images/logo_fb.png');

    imageLogo = require('assets/images/logo.png');
}
