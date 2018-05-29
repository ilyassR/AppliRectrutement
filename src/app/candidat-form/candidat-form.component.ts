import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-candidat-form',
  templateUrl: './candidat-form.component.html',
  styleUrls: ['./candidat-form.component.css']
})
export class CandidatFormComponent implements OnInit {

  @Input() showMePartially: boolean;

  constructor() { }

  ngOnInit() {
  }

}
