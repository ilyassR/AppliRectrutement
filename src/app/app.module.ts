import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CandidatsComponent } from './candidats/candidats.component';

import { CandidatService } from './candidat.service';

import { DataTableModule } from 'angular5-data-table';
import { DataTablesModule } from 'angular-datatables';
import { CandidatFormComponent } from './candidat-form/candidat-form.component';
import { ResultatComponent } from './resultat/resultat.component';
import { ResultatService } from './resultat.service';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireFormComponent } from './questionnaire-form/questionnaire-form.component';
import { AideComponent } from './aide/aide.component';
import { AlertComponent } from './alert/alert.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidatsComponent,
    CandidatFormComponent,
    ResultatComponent,
    QuestionnaireComponent,
    QuestionnaireFormComponent,
    AideComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataTableModule,
    DataTablesModule,
    HttpClientModule,
    HttpModule,
    PdfViewerModule
  ],
  providers: [CandidatService, ResultatService, QuestionnaireService],
  bootstrap: [AppComponent]
})
export class AppModule { }
