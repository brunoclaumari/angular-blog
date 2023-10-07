import { Component, Input, OnInit } from '@angular/core';
import * as metodos from '../../data/dataFake';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ingredientes',
  templateUrl: './ingredientes.component.html',
  styleUrls: ['./ingredientes.component.css']
})
export class IngredientesComponent implements OnInit {

  @Input()
  etapa_receita:string = "";

  @Input()
  id:string = "0"

  @Input()
  ingredients:string[] = [];

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
/*     this.route.paramMap.subscribe(value=>
      this.id = value.get("id") || ""
  ) */
    this.ingredients = metodos.getIngredients(Number.parseInt(this.id));
    console.log(this.ingredients);
    // = metodos.getIngredients(Number.parseInt(this.id));
  }

}
