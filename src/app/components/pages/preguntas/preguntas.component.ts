import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

//servicio
import { PreguntasService } from '../../../services/preguntas.service';

//modelo
import { Preguntas } from './../../../models/preguntas.model';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  
  quiz = {
    puntos: 0,
    pactual: 0,
  };

  pregunta: any;
  consejo: any;

  preguntas: Array<Preguntas>;
  
  actual : number = 0;

  show:boolean = false;
  showBtnConsejo:boolean = false;
  terminado : boolean = false;
  
  quizDataObs$ = new BehaviorSubject(this.quiz);

  constructor(private route: ActivatedRoute,private _preguntas: PreguntasService,) { 
    this.preguntas = new Array<Preguntas>();
    
    let localData = JSON.parse(localStorage.getItem('quiz'));
    if (localData) this.quiz = localData;

    this.actual = this.quiz.pactual;

    this.quizDataObs$.next(this.quiz);
  }

  ngOnInit(): void {
    localStorage.setItem('quiz', JSON.stringify(this.quiz));
    this.getQuestions();
  }

  // get Questions
  getQuestions(): void {
    this._preguntas.getQuestionsByQuiz()
      .subscribe(questions => {
        this.preguntas = questions;
      });
  }

  seleccionarRespuesta(actualP:number, option:any){
    /*if (actualP === this.preguntas.length) {
      this.terminado = true;
      console.log('el quiz ha termiando')  
    }*/

    this.quiz.puntos = Number(this.quiz.puntos) + Number(option.puntos);
    this.quizDataObs$.next({ ...this.quiz });
    localStorage.setItem('quiz', JSON.stringify(this.quiz));

    this.showBtnConsejo = true;
    this.consejo = this.preguntas[actualP].consejo;
    console.log(this.preguntas[actualP].consejo, option)
  }

  verConsejo(){
    this.show = true;
    this.showBtnConsejo = false;
    this.terminado = true;
  }

  sigPregunta(){
       this.quiz.pactual = this.quiz.pactual + 1;
       this.quizDataObs$.next({ ...this.quiz });
       localStorage.setItem('quiz', JSON.stringify(this.quiz));
      this.actual = this.quiz.pactual;

       console.log(this.actual)
       this.show = false;
       this.terminado = false;
  }

}
