import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes: Recipe[] = [new Recipe("Idli","Lentil Buns","https://4.bp.blogspot.com/-7C3B7VPDVKc/XBKGp3-XlcI/AAAAAAAA4VY/wKe7qrJ-ntQlNN5e1fGksH62duvg6f8-gCLcBGAs/s1600/Instant-Suji-idli.jpg"),new Recipe("Idli","Lentil Buns","https://4.bp.blogspot.com/-7C3B7VPDVKc/XBKGp3-XlcI/AAAAAAAA4VY/wKe7qrJ-ntQlNN5e1fGksH62duvg6f8-gCLcBGAs/s1600/Instant-Suji-idli.jpg")];
  
  constructor() { }

  ngOnInit(): void {
  }

}
