import { Recipe } from '../recipeModel';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe [] = [
    new Recipe("Test", "A Test recipe", "https://foodblogs-sympledesignllc.netdna-ssl.com/KRMEzNLX-ju1gXxmPpRolzl-_8o=/cdn.minimalistbaker.com%2Fwp-content%2Fuploads%2F2016%2F02%2FAMAZING-Chana-Masala-made-in-1-Pot-So-healthy-flavorful-and-delicious-vegan-glutenfree-chanamasala-recipe-minimalistbaker.jpg"),
    new Recipe("Test1", "A Test recipe", "https://foodblogs-sympledesignllc.netdna-ssl.com/KRMEzNLX-ju1gXxmPpRolzl-_8o=/cdn.minimalistbaker.com%2Fwp-content%2Fuploads%2F2016%2F02%2FAMAZING-Chana-Masala-made-in-1-Pot-So-healthy-flavorful-and-delicious-vegan-glutenfree-chanamasala-recipe-minimalistbaker.jpg")
  ];
   @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  selectedRecipe(recipe: Recipe) {
  this.recipeSelected.emit(recipe)
  }


}
