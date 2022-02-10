import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

// TODO: Add the ability for the <RecipeList /> component to list, edit and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.


  function App() {
    /*
    this variable creates the recipe- RecipeCreate makes the object and RecipeList takes 
    the object and turns it into an html table
    */
    const [recipes, setRecipes] = useState(RecipeData);
    // deletes the recipe 
    function deleteRecipe(recipeIndex){
      
      //this uses the filter methoud to find every index except for the one we want to delete. 
      setRecipes(recipes.filter((recipe, index)=>index !== recipeIndex));
    }
  
    return (
      <div className="App">
        <header><h1>Delicious Food Recipes</h1></header>
        <RecipeList
       
        //This is the Array that we created in RecipeCreate. 
        
        recipes={recipes} deleteRecipe={deleteRecipe}/>
        
        <RecipeCreate
        //where we send the recipes state to be updated 
        
        recipes={recipes} setRecipes={setRecipes}/>
      </div>
    );
  }
  
  export default App;
