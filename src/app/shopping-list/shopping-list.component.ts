import { ShoppingService } from './shopping.service';
import { Ingredient } from '../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
   ingredients;
  constructor( private shoppingService:ShoppingService ) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.shoppingService.ingredientsChanged
    .subscribe(item => {
      this.ingredients = item
    })
  }

}
