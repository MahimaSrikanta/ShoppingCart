import { ShoppingService } from '../../shopping-list/shopping.service';
import { Recipe } from '../recipeModel';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe : Recipe
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }
  
  toShopping() {
    this.recipe.ingredient.forEach((item) => {
      this.shoppingService.addIngredients(item);
    })

  }
  
}
