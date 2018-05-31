import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aide',
  template: '<pdf-viewer [src]="pdfSrc" [render-text]="true" style="display: block;"></pdf-viewer>',
  styleUrls: ['./aide.component.css']
})
export class AideComponent implements OnInit {

  pdfSrc: string = '/assets/ManuelUtilisationAppliRecrutementCGI.pdf';

  constructor() { }

  ngOnInit() {
  }

}
