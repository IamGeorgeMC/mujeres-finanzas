import { Component, OnInit,  Input, Output,EventEmitter  } from '@angular/core';
import { PreguntasService } from '../../../services/preguntas.service';
import { Resultados } from '../../../models/resultados.model';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  
  resultados: any;
  cadena: any;
  felicitaciones: string;
  intro: string;
  parrafo: string;
  parrafo2: string;
  bloomberg: string;
  data: any;


  constructor(private _resultados: PreguntasService) {
    this.data = JSON.parse(localStorage.getItem('quiz'));
  }

  ngOnInit(): void {
    this.getResults();
  }

  // get Questions
  getResults(): void {
    
    this._resultados.getResultsByQuiz().subscribe(results=> {
      if(this.data.puntos >= 10 && this.data.puntos <= 16){
         this.resultados = results[0].resultados;
         this.cadena = this.resultados.split(' - ');
         
         this.felicitaciones = this.cadena[0];
         this.intro = this.cadena[1];
         this.parrafo = this.cadena[2];
         this.parrafo2 = this.cadena[3];
         this.bloomberg = this.cadena[4];
      
      }else{
         this.resultados = results[1].resultados;
         this.cadena = this.resultados.split(' - ');
        
         this.felicitaciones = this.cadena[0];
         this.intro = this.cadena[1];
         this.parrafo = this.cadena[2];
         this.parrafo2 = this.cadena[3];
         this.bloomberg = this.cadena[4];
      }
    });
  }

  repetir(){
    localStorage.clear();
  }


}
