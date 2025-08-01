import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import useRecipeStore from './recipeStore'

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations)
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations)
  const addFavorite = useRecipeStore(state => state.addFavorite)
  const favorites = useRecipeStore(state => state.favorites)
  const recipes = useRecipeStore(state => state.recipes)

  // Generate recommendations when component mounts or when recipes/favorites change
  useEffect(() => {
    if (recipes.length > 0) {
      generateRecommendations()
    }
  }, [recipes, favorites, generateRecommendations])

  const handleAddToFavorites = (recipeId) => {
    addFavorite(recipeId)
    // Regenerate recommendations after adding to favorites
    setTimeout(() => generateRecommendations(), 100)
  }

  if (recommendations.length === 0) {
    return (
      <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '20px 0' }}>
        <h2>Recommended for You 🌟</h2>
        <p>No recommendations available yet. Add some recipes and mark them as favorites to get personalized suggestions!</p>
        <button 
          onClick={generateRecommendations}
          style={{
            background: '#2ed573',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Generate Recommendations
        </button>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', margin: '20px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Recommended for You 🌟</h2>
        <button 
          onClick={generateRecommendations}
          style={{
            background: '#2ed573',
            color: 'white',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          Refresh
        </button>
      </div>
      <p style={{ color: '#666', margin: '8px 0 16px 0', fontSize: '14px' }}>
        Based on your favorite recipes and preferences
      </p>
      <div>
        {recommendations.map(recipe => (
          <div key={recipe.id} style={{ 
            border: '1px solid #e6f3ff', 
            padding: '15px', 
            margin: '10px 0', 
            borderRadius: '4px',
            backgroundColor: '#f0f8ff'
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
              <div style={{ display: 'flex', gap: '8px' }}>
                {!favorites.includes(recipe.id) && (
                  <button
                    onClick={() => handleAddToFavorites(recipe.id)}
                    style={{
                      background: '#ff6b6b',
                      color: 'white',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}
                    title="Add to favorites"
                  >
                    Add to Favorites ❤️
                  </button>
                )}
                {favorites.includes(recipe.id) && (
                  <span style={{ 
                    color: '#ff6b6b', 
                    fontSize: '12px', 
                    padding: '5px 10px',
                    fontWeight: 'bold'
                  }}>
                    ❤️ Favorited
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecommendationsList