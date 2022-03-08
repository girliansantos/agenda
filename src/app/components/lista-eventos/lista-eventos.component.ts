import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {

  eventos = [{id: 1, desc: "evento 1", data:"22/08/2022", prioridade: "Alta"}, 
  {id: 2, desc: "evento 2", data:"22/08/2022", prioridade: "Baixa"},
  {id: 3, desc: "evento 3", data:"22/08/2022", prioridade: "Média"},
  {id: 4, desc: "evento 4", data:"22/08/2022", prioridade: "Alta"}]

  constructor() { }

  ngOnInit(): void {
  }

}
