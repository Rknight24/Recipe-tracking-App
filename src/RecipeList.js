import React from "react";

// TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  function RecipeList({recipes, deleteRecipe}) {

    return (
      <div className="recipe-list">
        <table>
          <thead>
            <tr
            // creates the column names
            >
              <th>Name</th>
              <th>Cuisine</th>
              <th>Photo</th>
              <th>Ingredients</th>
              <th>Preparations</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody
          // sends the recipes array and deleteRecipe function to post recipe where it creates the post, then returns it inside the table body below
          ><PostRecipe recipes={recipes} deleteRecipe={deleteRecipe}/></tbody>
        </table>
      </div>
    );
  }
  
  export default RecipeList;
