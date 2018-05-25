import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';

import { Candidat } from '../candidat';
import { CANDIDATS } from '../mock-candidats';

@Component({
  selector: 'app-candidats',
  templateUrl: './candidats.component.html',
  styleUrls: ['./candidats.component.css']
})
export class CandidatsComponent implements OnInit {

  candidats: Candidat[];

  ngOnInit(){
    this.candidats = CANDIDATS;
  }

  itemResource = new DataTableResource(CANDIDATS);
    items = [];
    itemCount = 0;

  constructor() { 
    console.log(CANDIDATS.length);
    this.itemResource.count().then(count => this.itemCount = count);
   }

   reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }

}
