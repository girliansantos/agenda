import { Component } from '@angular/core';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { EventoComponent } from './components/evento/evento.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agenda';
  data = new Date();
  calendario = new CalendarioComponent()
  eventos = EventoComponent
}
