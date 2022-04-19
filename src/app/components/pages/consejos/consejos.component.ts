import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { SigPregunta } from 'src/app/models/sigPregunta.model';

import { PreguntasComponent } from '../preguntas/preguntas.component';



@Component({
  selector: 'app-consejos',
  templateUrl: './consejos.component.html',
  styleUrls: ['./consejos.component.css']
})
export class ConsejosComponent implements OnInit {

  @Input() consejo: string = "";

  @Output() terminado = new EventEmitter<SigPregunta>();

  showConsejo:boolean = false;
  btnResultado : boolean = false;
  quiz: any;
  
  constructor(private _preguntas : PreguntasComponent) { 
    this._preguntas.quizDataObs$.subscribe((quizData) => {
      this.quiz = quizData;
    });
  }

  ngOnInit(): void {
    if (this.quiz.pactual === 9) {
          this.btnResultado = true;
          console.log('el quiz ha termiando')  
    }
  }

  sigPregunta(){
       
       this.quiz.pactual = this.quiz.pactual + 1;
       this._preguntas.quizDataObs$.next({ ...this.quiz });
       localStorage.setItem('quiz', JSON.stringify(this.quiz));

       this.showConsejo = true;
       this.btnResultado = false;
       let sigPregunta = new SigPregunta(); 
       sigPregunta.termiando = true;
       sigPregunta.actual = this.quiz.pactual;
       this.terminado.emit(sigPregunta);

  }

  

}
