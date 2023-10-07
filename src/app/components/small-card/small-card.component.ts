import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  id:string = "0";

  @Input()
  link_image:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJvXmeUX4XVM1b7VJ_GzdzibbHG99fQL-WEjMGLlpll-CM1qxRbaFNCuAC6jEtpRMMjY&usqp=CAU';

  @Input()
  featured:string = "Lembrança da vovó";

  @Input()
  recipe_title:string = "Sopa de feijão";

  @Input()
  recipe_data:string = "03 de Outubro de 2023";

  @Input()
  recipe_category:string = "Sopas";

  constructor() { }

  ngOnInit(): void {
  }

}
