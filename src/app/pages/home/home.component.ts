import { Component, Input, OnInit } from '@angular/core';
import { receitas } from '../../data/dataFake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()
  recipe:any = receitas;

  constructor() { }

  ngOnInit(): void {
  }

}
