import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'
import FavoriteButton from './FavoriteButton'

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes)
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes)
  const searchTerm = useRecipeStore(state => state.searchTerm)
  
  // Use filtered recipes if there's a search term, otherwise show all recipes
  const displayRecipes = searchTerm ? filteredRecipes : recipes

  return (
    <div>
      <h2>Recipe List</h2>
      {searchTerm && (
        <p>
          {filteredRecipes.length} recipe(s) found for "{searchTerm}"
        </p>
      )}
      {displayRecipes.length === 0 ? (
        <p>
          {searchTerm 
            ? `No recipes found matching "${searchTerm}"`
            : "No recipes yet. Add your first recipe!"
          }
        </p>
      ) : (
        displayRecipes.map(recipe => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0', borderRadius: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h3>
                  <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                    {recipe.title}
                  </Link>
                </h3>
                <p style={{ margin: '8px 0', color: '#666' }}>{recipe.description}</p>
              </div>
              <FavoriteButton recipeId={recipe.id} />
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default RecipeList