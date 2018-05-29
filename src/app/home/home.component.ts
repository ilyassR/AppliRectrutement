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
    private msgBienvenue = environment.default_home_menu_bienvenue;

    /* Images paths */
    imageRecrute = require('assets/images/recrute.jpg');
    imageCanvas2 = require('assets/images/canvas2.png');
    imageCanvas = require('assets/images/canvas.png');

    constructor() { }

  ngOnInit() {
  }

}
