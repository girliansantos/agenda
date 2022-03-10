import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  itens = [{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},
    {num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},
    {num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},{num: 0},
    {num: 0},{num: 0},]  

  constructor() { }

  ngOnInit(): void {
  }

}
