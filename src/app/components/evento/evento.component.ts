import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  
  constructor() { }

  descricao = 'EVENTO 1';
  data = '22/03/2022';

  ngOnInit(): void {
  }

}
