import { Ingredient } from '../../shared/ingredient.model';

import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') nameInput : ElementRef
  @ViewChild('amount') amountInput : ElementRef
  @Output() onAddIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }
  onAdd(){
   let inputIngredient = new Ingredient(this.nameInput.nativeElement.value,
                          this.amountInput.nativeElement.value);
    this.onAddIngredient.emit(inputIngredient);
  }
}
