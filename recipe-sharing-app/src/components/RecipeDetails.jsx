import { useParams, useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'

const RecipeDetails = () => {
  const { recipeId } = useParams()
  const navigate = useNavigate()
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(recipeId))
  )

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate('/')}>Back to Recipes</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => navigate('/')}>← Back to Recipes</button>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <div style={{ marginTop: '20px' }}>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  )
}

export default RecipeDetails