import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @Output() ingredientDetails = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void {
  }

  addItems(name:string,amount:number){
     this.ingredientDetails.emit(new Ingredient(name,amount));
    
  }

}
