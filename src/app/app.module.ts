import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CandidatsComponent } from './candidats/candidats.component';

import { CandidatService } from './candidat.service';

import { DataTableModule } from 'angular5-data-table';
import { DataTablesModule } from 'angular-datatables';
import { CandidatFormComponent } from './candidat-form/candidat-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CandidatsComponent,
    CandidatFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataTableModule,
    DataTablesModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [CandidatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
