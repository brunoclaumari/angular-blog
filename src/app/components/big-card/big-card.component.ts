import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  /*

<p class="category">Saladas e entradas</p>
    <p class="title" >Salada Primavera Simples</p>
    <p class="data" >02/10/2023 - 3 min de leitura</p>
    */
  @Input()
  category: string = 'Saladas e Entradas';

  @Input()
  title: string = 'Salada Primavera Simples';

  @Input()
  data: string = '02/10/2023 - 3 min de leitura';

  constructor() {}

  ngOnInit(): void {}
}
