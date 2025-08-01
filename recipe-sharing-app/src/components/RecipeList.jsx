import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'

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
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default RecipeList