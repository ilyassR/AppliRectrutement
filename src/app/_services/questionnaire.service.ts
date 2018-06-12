import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Questionnaire } from '../_models/questionnaire';
import { QUESTIONNAIRES } from '../mock-questionnaires';

@Injectable()
export class QuestionnaireService {

  constructor(private http: HttpClient) { }

  getQuestionnaires(): Observable<Questionnaire[]> {
        return of(QUESTIONNAIRES);
  }

}
