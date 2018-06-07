import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DataTableModule } from 'angular5-data-table';
import { DataTablesModule } from 'angular-datatables';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CandidatsComponent } from './candidats/candidats.component';
import { CandidatFormComponent } from './candidat-form/candidat-form.component';
import { ResultatComponent } from './resultat/resultat.component';
import { ResultatService } from './resultat.service';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { QuestionnaireService } from './questionnaire.service';
import { QuestionnaireFormComponent } from './questionnaire-form/questionnaire-form.component';
import { AideComponent } from './aide/aide.component';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { LoginComponent } from './login/login.component';

import { CandidatService } from './candidat.service';
import { AlertService, AuthenticationService, UserService } from './_services/index';


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
  providers: [CandidatService, ResultatService, QuestionnaireService,
   AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
