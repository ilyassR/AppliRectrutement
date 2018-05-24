import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';


declare function require(path: string);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* parametres de configuration */
    private msgHomeFooter = environment.default_home_footer;
    private msgBienvenue = environment.default_home_menu_bienvenue;

    /* Images paths */
    imageRecrute = require('assets/images/recrute.jpg');
    imageCanvas2 = require('assets/images/canvas2.png');
    imageCanvas = require('assets/images/canvas.png');
    imageLogo = require('assets/images/logo.png');
    imageLogoFB = require('assets/images/logo_fb.png');
    imageLogoTwitter = require('assets/images/logo_twitter.png');
    imageLogoLinkedin = require('assets/images/logo_linkedin.png');
    imageLogoYoutube = require('assets/images/logo_youtube.png');
    imageLogoRss = require('assets/images/logo_rss.png');

    constructor() { }

  ngOnInit() {
  }

}
