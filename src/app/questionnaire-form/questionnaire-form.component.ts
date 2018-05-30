import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.css']
})
export class QuestionnaireFormComponent implements OnInit {

  @Input() showMePartially: boolean;

  constructor() { }

  ngOnInit() {
  }

}
