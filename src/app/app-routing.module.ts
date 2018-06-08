import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }   from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CandidatsComponent }   from './candidats/candidats.component';
import { ResultatComponent }   from './resultat/resultat.component';
import { QuestionnaireComponent }   from './questionnaire/questionnaire.component';
import { AideComponent } from './aide/aide.component';
import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/index';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'candidats', component: CandidatsComponent },
  { path: 'resultats', component: ResultatComponent },
  { path: 'questionnaires', component: QuestionnaireComponent },
  { path: 'corrections', component: ResultatComponent },
  { path: 'aide', component: AideComponent },
  { path: 'register', component: RegisterComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
})
export class AppRoutingModule { }
