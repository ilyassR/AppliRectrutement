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

    /* parametres de configuration */
    private msgBienvenue = environment.default_home_menu_bienvenue;
    private msgHomeLabel = environment.default_home_label;
    private msgHomeMenuResult = environment.default_home_menu_result;
    private msgHomeMenuCandidats = environment.default_home_menu_candidats;
    private msgHomeMenuTests = environment.default_home_menu_tests;

    /* Images paths */
    imageRecrute = require('assets/images/recrute.jpg');
    imageCanvas2 = require('assets/images/canvas2.png');
    imageCanvas = require('assets/images/canvas.png');
}
