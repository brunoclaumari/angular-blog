import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { receitas } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  id:string = "0";
  contentTitle:string = "";
  @Input()
  photoCover:string = ""

  @Input()
  ingredients:string[]=[]

  @Input()
  preparation:string[]=[]

  @Input()
  recipe_category:string=""

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value=>
        this.id = value.get("id") || ""
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string){
    const result = receitas.filter(obj => obj.id == Number.parseInt(id))[0];
    //this.recipe = result;
    //if()
    console.log(result);
    this.contentTitle = result.recipe_title;
    this.photoCover = result.link_image;
    this.ingredients = result.ingredients;
    this.preparation = result.preparation;
    this.recipe_category = result.recipe_category
  }

}
