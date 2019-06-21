import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
  
@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
                    "Test Recipe 1", 
                    "A simple test recipe 1",
                     "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
                     [
                         new Ingredient("Meat", 1),
                         new Ingredient("French Fries",20)
                     ]
                    ),
        new Recipe(
                    "Test Recipe 2", 
                    "A simple test recipe 2", 
                    "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
                    [
                        new Ingredient("Brade", 2),
                        new Ingredient("Eggs",5)
                    ]
                    )    
      ];
    
    constructor(private slService: ShoppingListService){

    }
    getRecipes(){
        return this.recipes.slice();
    }
    
    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppinglist(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index]= newRecipe; 
        this.recipeChanged.next(this.recipes.slice())
    }

}