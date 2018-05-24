import { Component } from '@angular/core';
import { environment } from '../environments/environment';

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
}
