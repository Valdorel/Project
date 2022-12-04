import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shares/ingredient-model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Mele', 14),
    new Ingredient('Pere', 89)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
