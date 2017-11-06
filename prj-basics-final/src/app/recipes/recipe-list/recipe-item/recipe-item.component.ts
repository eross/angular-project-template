import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    console.log("recipe-item ngOnInit");
    console.log(this.recipe.name);
  }

  onSelected(recipe: string) {
    this.recipeSelected.emit();
  }

}
