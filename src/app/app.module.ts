import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventoComponent } from './components/evento/evento.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    EventoComponent,
    ListaEventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
