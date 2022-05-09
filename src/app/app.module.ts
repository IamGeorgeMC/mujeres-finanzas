import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { PreguntasComponent } from './components/pages/preguntas/preguntas.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultadosComponent } from './components/pages/resultados/resultados.component';
import { ConsejosComponent } from './components/pages/consejos/consejos.component'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PreguntasComponent,
    FooterComponent,
    HeaderComponent,
    ResultadosComponent,
    ConsejosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
