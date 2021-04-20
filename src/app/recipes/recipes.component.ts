import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  itemDetail : Recipe;
  theSelectedRecipeItem:Recipe;
  constructor() { }

  ngOnInit(): void {
  }
  onSelectItem(item : Recipe){
    this.itemDetail = item;

  }

}
