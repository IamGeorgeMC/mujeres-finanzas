import { Respuestas } from "./respuestas.model";

export class Preguntas {
    id: number;
    pregunta: string;
    consejo: number;
    respuestas : Array<Respuestas>;

    constructor(){
        this.id = 0;
        this.pregunta = '';
        this.consejo = 0;
        this.respuestas = new Array<Respuestas>();
    }
}