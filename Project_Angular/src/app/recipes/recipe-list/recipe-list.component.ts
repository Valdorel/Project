import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipes.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a test',
      'https://dcassetcdn.com/design_img/10150/25224/25224_294121_10150_image.jpg'),

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
