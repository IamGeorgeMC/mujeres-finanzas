import { Injectable } from '@angular/core';
import { Preguntas } from '../models/preguntas.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private url = 'http://localhost/quiz/apis/preguntas'; 

  constructor(private http: HttpClient) { }

  getQuestionsByQuiz(): Observable<Preguntas[]> {
    return this.http.get<Preguntas[]>(this.url)
      .pipe();
  }
}
