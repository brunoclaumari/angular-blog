import { Component, Input, OnInit } from '@angular/core';
import * as metodos from '../../data/dataFake';

@Component({
  selector: 'app-modo-preparo',
  templateUrl: './modo-preparo.component.html',
  styleUrls: ['./modo-preparo.component.css']
})
export class ModoPreparoComponent implements OnInit {
  //@Input()
  //etapa_receita:string = "";

  @Input()
  id:string = "0"

  @Input()
  preparation:string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.preparation = metodos.getPreparation(Number.parseInt(this.id))
  }

}
