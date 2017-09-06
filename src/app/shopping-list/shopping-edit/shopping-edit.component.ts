import { ShoppingService } from '../shopping.service';
import { Ingredient } from '../../shared/ingredient.model';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') nameInput : ElementRef
  @ViewChild('amount') amountInput : ElementRef
 

  constructor( private shoppingService:ShoppingService) { }

  ngOnInit() {
  }
  onAdd(){
   let inputIngredient = new Ingredient(this.nameInput.nativeElement.value,
                          this.amountInput.nativeElement.value);
    this.shoppingService.addIngredients(inputIngredient);
    
  }
}
