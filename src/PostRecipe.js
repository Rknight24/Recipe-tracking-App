import React from "react";
 
// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers



 //takes in the recipe information from App.js and the deleteRecipe function in App.js
  function PostRecipe({recipes, deleteRecipe}) {
    // .map makes the rows, takeing in deconstructed name, and additional Data/recipe Data. 
    return recipes.map(({name, cuisine, photo, ingredients, preparation}, index) => {
       return ( 
        <tr key={index}
        //creating an index so that we can referance it later for deletRecipe. (significant for React)
        >
          <td
          //takes the current name from the current indexed iteration recipes object
          >{name}</td>
          <td
          //same as above but for cuisine
          >{cuisine}</td>
          <td
          // same as above 
          ><img className="scale-down" src={photo} alt="Ignore"/></td>
          <td className="content_td"
          //ingrediants cell
          ><p
          //they are then inserted as paragraphs 
          >{ingredients}</p></td>
          <td className="content_td"
          //preparation cell
          ><p>{preparation}</p></td>
          <td><button
          //the delete button, has an onClick function to referance deleteRecipe function.
          name="delete" onClick={() => deleteRecipe(index)}>Delete</button></td>
        </tr> );
    })
  }
export default PostRecipe;
