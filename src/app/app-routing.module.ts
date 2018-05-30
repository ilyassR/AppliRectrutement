import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { CandidatsComponent }   from './candidats/candidats.component';
import { ResultatComponent }   from './resultat/resultat.component';
import { QuestionnaireComponent }   from './questionnaire/questionnaire.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'candidats', component: CandidatsComponent },
  { path: 'resultats', component: ResultatComponent },
  { path: 'questionnaires', component: QuestionnaireComponent }
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
