import { Component, OnInit,  Input, Output,EventEmitter  } from '@angular/core';

import { PreguntasComponent } from '../preguntas/preguntas.component';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  @Input() consejo: string = "";

  constructor() {

  }

  ngOnInit(): void {
  }

  click() {

  }
}
