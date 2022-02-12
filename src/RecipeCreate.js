import React, { useState } from "react";
// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
function RecipeCreate({addRecipe}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }

  const [formData, setFormData] = useState({...initialFormState})
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    console.log(formData)
    addRecipe(formData)
    setFormData({...initialFormState})
  }
  
  return (
    <form name="create" onSubmit={handleSubmission}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                id="name"
                type="text"
                name="name"
                required={true}
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input 
                id="cuisine"
                type="text"
                name="cuisine"
                required={true}
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input 
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                required={true}
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea 
                id="ingredients"
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                required={true}
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea 
                id="preparation"
                type="text"
                name="preparation"
                placeholder="Preparation"
                required={true}
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
 