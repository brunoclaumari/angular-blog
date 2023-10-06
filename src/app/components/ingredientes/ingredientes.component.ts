import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {

  @Input()
  etapa_receita:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
