import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  const addRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [
      ...currentRecipes,
      newRecipe
    ])
  }

  const deleteRecipe = (indexToDelete) => {
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, currentIndex) => currentIndex !== indexToDelete))
  }

  //try adding an updateRecipe function that allows you to edit any field.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe}/>
    </div>
  );
}

export default App;