import { Injectable } from '@angular/core';
import { Preguntas } from '../models/preguntas.model';
import { Resultados } from '../models/resultados.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private url = 'http://quizmujeres.indiga.mx/quiz/apis/preguntas.php';
   
  private urlresultados = 'http://quizmujeres.indiga.mx/quiz/apis/resultados.php'; 

  constructor(private http: HttpClient) { }

  getQuestionsByQuiz(): Observable<Preguntas[]> {
    return this.http.get<Preguntas[]>(this.url)
      .pipe();
  }


  getResultsByQuiz(): Observable<Resultados[]> {
    return this.http.get<Resultados[]>(this.urlresultados)
      .pipe();
  }
}
