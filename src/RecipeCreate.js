import React, { useState } from "react";


function RecipeCreate({recipes, setRecipes}) {
  //resets inputs after the user hits "create"
 const initialFormState = {
   name: "",
   cuisine: "",
   photo: "",
   ingredients: "",
   preparation: ""
 };

 //formData holds the current state
 const [formData, setFormData] = useState({...initialFormState});
//saves info put into the input boxes - it is updated when anything is changed in the input field
  const handleChange = ({target}) => {
  //creates a new state to overwrite whats in initialFormState
    setFormData({
      //makes a copy of the current formData object
      ...formData,
      // match the key to the target name, like "cuisine", then override its value with input field 
      [target.name]: target.value,
    });
  };
  //this activates when the submit button is clicked
  const handleSubmit = (event) => {
    //stops the page from refreshing
    event.preventDefault();
    //this sends back the compleated object to App.js that will then be passed to RecipeList
    setRecipes([...recipes, formData]);
    //resets the input fields with  initialFormState object
    setFormData({...initialFormState});
  }
 
  return (
    <form 
    //has onSubmit to send the data when you hit the button 
    name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td htmlFor="name">
             <input
               id="name"
               type="text"
               name="name"
               //updates formData.name 
               onChange={handleChange}
               //allows the app to get the input field text
               value={formData.name}
               //text inside the input field to match the mockup
               placeholder="Name"
               //stops you from posting a recipe without a name
               required={true}
             />
            </td>
            <td htmlFor="cuisine">
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
                required={true}
              />
            </td>
            <td htmlFor="photo">
              <input
                id="photo"
                type="url"
                name="photo"
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
                
              />
            </td>
            <td htmlFor="ingredients">
              <textarea
                id="ingredients"
                type="textarea"
                name="ingredients"
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
                required={true}
              />
            </td>
            <td htmlFor="preparation">
              <textarea
                id="preparation"
                type="textarea"
                name="preparation"
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
                required={true}
              />
            </td>
            <td>
              <button 
              //the button for onSubmit
              type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;