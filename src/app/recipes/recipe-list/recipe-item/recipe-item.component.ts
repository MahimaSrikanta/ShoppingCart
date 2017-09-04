import { Recipe } from '../../recipeModel';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe :Recipe;
  @Output() selectedRecipe = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSelectRecipe () {
    this.selectedRecipe.emit();
  }

}
