import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/internal/Subject';

export class ShoppingListService {
    ingredientsChanged= new Subject<Ingredient[]>();
    private ingredients: Ingredient[]= [
        new Ingredient("Apple ", 30),
        new Ingredient("Mango", 40)
      ];
    
    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(newIngredients: Ingredient[]){
        this.ingredients.push(...newIngredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}