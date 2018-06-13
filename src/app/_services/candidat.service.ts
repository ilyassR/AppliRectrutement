import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

import { Candidat } from '../_models/candidat';
import { CANDIDATS } from '../mock-candidats';

@Injectable()
export class CandidatService {
  private userUrl = '/api';
  constructor(private http: HttpClient) { }
/*
  getCandidats(): Observable<Candidat[]> {
        return of(CANDIDATS);
  }*/
  getCandidats(): Observable<Candidat[]> {
      return this.http.get<Candidat[]>( this.userUrl + '/candidats');
  }

}
