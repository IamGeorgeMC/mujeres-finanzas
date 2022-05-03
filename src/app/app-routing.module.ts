import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from  './components/pages/inicio/inicio.component';
import { PreguntasComponent } from  './components/pages/preguntas/preguntas.component';
import { ResultadosComponent } from  './components/pages/resultados/resultados.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'resultados', component: ResultadosComponent },

  { path: '**', redirectTo: 'inicio' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
