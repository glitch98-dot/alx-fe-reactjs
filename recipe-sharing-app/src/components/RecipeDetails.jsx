import { useParams, useNavigate } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton'
import FavoriteButton from './FavoriteButton'

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
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <button onClick={() => navigate('/')} style={{ marginBottom: '20px' }}>← Back to Recipes</button>
      
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
          <h1 style={{ margin: 0, flex: 1 }}>{recipe.title}</h1>
          <FavoriteButton recipeId={recipe.id} />
        </div>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>{recipe.description}</p>
      </div>
      
      <div style={{ 
        display: 'flex', 
        gap: '10px', 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        marginTop: '30px'
      }}>
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  )
}

export default RecipeDetails