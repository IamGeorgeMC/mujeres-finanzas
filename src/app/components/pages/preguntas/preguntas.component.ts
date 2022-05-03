import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  valor: string = "";
  imgselected: string;
  showBtnConsejo:boolean = false;
  terminado : boolean = false;
  
  quizDataObs$ = new BehaviorSubject(this.quiz);

  constructor(private route: ActivatedRoute,private _preguntas: PreguntasService, private router:Router) { 
    this.preguntas = new Array<Preguntas>();
    
    let localData = JSON.parse(localStorage.getItem('quiz'));
    if (localData) this.quiz = localData;
    
    this.actual = this.quiz.pactual;

    this.quizDataObs$.next(this.quiz);

  }

  ngOnInit(): void {
    localStorage.setItem('quiz', JSON.stringify(this.quiz));
    this.getQuestions();

    if(this.actual === 9){
      this.router.navigate(['/resultados']);
    }
  }

  // get Questions
  getQuestions(): void {
    this._preguntas.getQuestionsByQuiz()
      .subscribe(questions => {
        this.preguntas = questions;
      });
  }

  seleccionarRespuesta(actualP:number, option:any, selected:string, index:any){
    const element :any = document.getElementById('imgselected'+index);
    const element2 :any = document.getElementsByClassName('selected');
    var input : any = (<HTMLInputElement>document.getElementById('valueSelect'+index)).value;
    
    if(actualP == 7){
      if(input == 'selected'){
          element.classList.remove('selected');
          (<HTMLInputElement>document.getElementById('valueSelect'+index)).value = '';
      }else{
        if(selected == option.imagen){
          element.classList.add('selected');
          (<HTMLInputElement>document.getElementById('valueSelect'+index)).value = 'selected';
        }
      }
    }else{
      if(element2.length > 0){
        for (var i = 0; i< element2.length; i++) {
           element2[i].classList.remove("selected");
           element.classList.add("selected");
        }
      }else{
        element.classList.add('selected');
      }
    }
    
    this.imgselected = option.imagen;
    this.quiz.puntos = Number(this.quiz.puntos) + Number(option.puntos);
    this.quiz.pactual = this.actual;
    this.quizDataObs$.next({ ...this.quiz });
    localStorage.setItem('quiz', JSON.stringify(this.quiz));

    this.showBtnConsejo = true;
    this.consejo = this.preguntas[actualP].consejo;
  }

  verConsejo(){
    this.show = true;
    this.showBtnConsejo = false;
    this.terminado = true;
  }

  /*sigPregunta(){
       this.quiz.pactual = this.quiz.pactual + 1;
       this.quizDataObs$.next({ ...this.quiz });
       localStorage.setItem('quiz', JSON.stringify(this.quiz));
      this.actual = this.quiz.pactual;

       console.log(this.actual)
       this.show = false;
       this.terminado = false;
  }*/


  validcionpre(event){
    //console.log(event)
    this.terminado = event.terminado;
    this.actual = event.actual;
    this.show = false;
  }
}