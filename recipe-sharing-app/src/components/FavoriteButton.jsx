import useRecipeStore from './recipeStore'

const FavoriteButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites)
  const addFavorite = useRecipeStore(state => state.addFavorite)
  const removeFavorite = useRecipeStore(state => state.removeFavorite)
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations)

  const isFavorite = favorites.includes(recipeId)

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId)
    } else {
      addFavorite(recipeId)
    }
    // Regenerate recommendations when favorites change
    setTimeout(() => generateRecommendations(), 100)
  }

  return (
    <button
      onClick={handleToggleFavorite}
      style={{
        background: isFavorite ? '#ff6b6b' : '#ddd',
        color: isFavorite ? 'white' : '#666',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        transition: 'all 0.2s ease'
      }}
      title={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? '❤️ Favorited' : '🤍 Add to Favorites'}
    </button>
  )
}

export default FavoriteButton