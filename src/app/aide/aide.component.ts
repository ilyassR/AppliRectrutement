import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aide',
  templateUrl: './aide.component.html',
  styleUrls: ['./aide.component.css']
})
export class AideComponent implements OnInit {

  pdfSrc: string = '/assets/ManuelUtilisationAppliRecrutementCGI.pdf';

  constructor() { }

  ngOnInit() {
  }

}
