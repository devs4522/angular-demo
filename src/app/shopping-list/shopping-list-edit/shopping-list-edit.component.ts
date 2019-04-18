import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {}

  onAddItem(){
    const ingNmae= this.nameInputRef.nativeElement.value;
    const ingAmount= this.amountInputRef.nativeElement.value;
    const newIngredient= new Ingredient(ingNmae,ingAmount);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
