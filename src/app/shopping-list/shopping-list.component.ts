import { Ingredient } from '../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Mangoes", 2)
  ]
  onAddIngredientList(ingredient: Ingredient){
    console.log(ingredient);
    this.ingredients.push(ingredient);
  }
}
