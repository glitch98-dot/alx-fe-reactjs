import { useState } from 'react'
import useRecipeStore from './recipeStore'

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe)
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(recipe.title)
  const [description, setDescription] = useState(recipe.description)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title.trim() && description.trim()) {
      updateRecipe(recipe.id, {
        title: title.trim(),
        description: description.trim()
      })
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setTitle(recipe.title)
    setDescription(recipe.description)
    setIsEditing(false)
  }

  if (!isEditing) {
    return (
      <button onClick={() => setIsEditing(true)}>
        Edit Recipe
      </button>
    )
  }

  return (
    <div>
      <h3>Edit Recipe</h3>
      <div onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          required
        />
        <div>
          <button type="submit" onClick={handleSubmit}>
            Save Changes
          </button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default EditRecipeForm