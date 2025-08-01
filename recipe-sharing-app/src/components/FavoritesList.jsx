import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites)
  const recipes = useRecipeStore(state => state.recipes)
  const removeFavorite = useRecipeStore(state => state.removeFavorite)

  // Get favorite recipe objects
  const favoriteRecipes = favorites.map(id =>
    recipes.find(recipe => recipe.id === id)
  ).filter(Boolean) // Remove any undefined entries

  if (favoriteRecipes.length === 0) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '20px 0' }}>
        <h2>My Favorites ❤️</h2>
        <p>No favorite recipes yet. Start by adding some recipes to your favorites!</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '20px 0' }}>
      <h2>My Favorites ❤️ ({favoriteRecipes.length})</h2>
      <div>
        {favoriteRecipes.map(recipe => (
          <div key={recipe.id} style={{ 
            border: '1px solid #eee', 
            padding: '15px', 
            margin: '10px 0', 
            borderRadius: '4px',
            backgroundColor: '#f9f9f9'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ flex: 1 }}>
                <h3>
                  <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: '#333' }}>
                    {recipe.title}
                  </Link>
                </h3>
                <p style={{ color: '#666', margin: '8px 0' }}>{recipe.description}</p>
              </div>
              <button
                onClick={() => removeFavorite(recipe.id)}
                style={{
                  background: '#ff4757',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginLeft: '10px',
                  fontSize: '12px'
                }}
                title="Remove from favorites"
              >
                Remove ❤️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FavoritesList