import { Component, OnInit } from '@angular/core';
import { Dia } from 'src/app/util/enums';

@Component({
  selector: 'item-calendario',
  templateUrl: './item-calendario.component.html',
  styleUrls: ['./item-calendario.component.css']
})
export class ItemCalendarioComponent implements OnInit {
  
  dados = {
      dia: '',
      numero: 0,
      tarefas: []
  }

  constructor() {

   }

  ngOnInit(): void {
  }

}
