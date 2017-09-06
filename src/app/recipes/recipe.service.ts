import { EventEmitter } from '@angular/core';
import { Recipe } from './recipeModel';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Rava Idli", "Thakkali chutney recipe, a tasty, south indian style tomato chutney for dosa and idli", "http://media3.sailusfood.com/wp-content/uploads/2017/04/tomato-chutney-for-idli-dosa.jpg",
               [{name:"Tomatoes", amount:5 },
                {name: "Chillies", amount:4 }
               ]
              ),
    new Recipe("MASALA KHICHDI", "Masala khichdi recipe, a quick, easy to make, wholesome and comforting one pot meal using rice, dal, vegetables", "http://media2.sailusfood.com/wp-content/uploads/2017/02/masala-khichdi.jpg",
              [{name:"Raw rice ", amount:1 },
                {name: "Onion ", amount:1 }
               ]
              )
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}