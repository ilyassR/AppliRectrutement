import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs';

import 'rxjs/add/operator/map';

import { DataTableResource } from 'angular5-data-table';

import { QuestionnaireService } from '../questionnaire.service';
import { Questionnaire } from '../questionnaire';
import { QUESTIONNAIRES } from '../mock-questionnaires';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  questionnaires: Questionnaire[];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<Questionnaire> = new Subject();

  displayQuizForm: boolean = false;

  newQuizFrom(){
    this.displayQuizForm = !this.displayQuizForm;
  }

  constructor(private questionnaireService: QuestionnaireService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.questionnaireService.getQuestionnaires().subscribe(questionnaires => {
        this.questionnaires = questionnaires;
        this.dtTrigger.next();
      });
  }

}
