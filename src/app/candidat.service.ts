import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Candidat } from './candidat';
import { CANDIDATS } from './mock-candidats';

@Injectable()
export class CandidatService {

  constructor(private http: HttpClient) { }

  getCandidats(): Observable<Candidat[]> {
        return of(CANDIDATS);
  }

}
