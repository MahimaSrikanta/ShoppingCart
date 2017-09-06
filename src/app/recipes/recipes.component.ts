import { RecipeService } from './recipe.service';
import { Recipe } from './recipeModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipDetail: Recipe;
  constructor( private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe((recipe: Recipe) => {
      this.selectedRecipDetail = recipe
    })
  }
  
  selectedRecipe(recipe){
    this.selectedRecipDetail = recipe;
  }
}
