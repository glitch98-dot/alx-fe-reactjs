import { create } from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
  
  addRecipe: (newRecipe) => set((state) => {
    const updatedRecipes = [...state.recipes, newRecipe];
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  
  setRecipes: (recipes) => set((state) => ({
    recipes,
    filteredRecipes: recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  
  deleteRecipe: (id) => set((state) => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== id);
    const updatedFavorites = state.favorites.filter(favId => favId !== id);
    return {
      recipes: updatedRecipes,
      favorites: updatedFavorites,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),
  
  updateRecipe: (id, updatedRecipe) => set((state) => {
    const updatedRecipes = state.recipes.map(recipe => 
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    );
    return {
      recipes: updatedRecipes,
      filteredRecipes: updatedRecipes.filter(recipe =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    };
  }),

  setSearchTerm: (term) => set((state) => ({
    searchTerm: term,
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase()) ||
      recipe.description.toLowerCase().includes(term.toLowerCase())
    )
  })),

  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  // Favorites functionality
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  // Recommendations functionality
  generateRecommendations: () => set((state) => {
    // Generate recommendations based on favorites
    const favoriteRecipes = state.favorites.map(id => 
      state.recipes.find(recipe => recipe.id === id)
    ).filter(Boolean);

    // Simple recommendation algorithm:
    // 1. If user has favorites, recommend similar recipes (by common words in title/description)
    // 2. Otherwise, recommend random popular recipes
    let recommended = [];

    if (favoriteRecipes.length > 0) {
      // Extract keywords from favorite recipes
      const favoriteKeywords = favoriteRecipes.flatMap(recipe => 
        [...recipe.title.toLowerCase().split(' '), ...recipe.description.toLowerCase().split(' ')]
      ).filter(word => word.length > 3); // Only words longer than 3 characters

      // Find recipes that share keywords with favorites (but aren't already favorites)
      recommended = state.recipes.filter(recipe => {
        if (state.favorites.includes(recipe.id)) return false; // Don't recommend favorites
        
        const recipeKeywords = [...recipe.title.toLowerCase().split(' '), ...recipe.description.toLowerCase().split(' ')];
        return favoriteKeywords.some(keyword => recipeKeywords.includes(keyword));
      }).slice(0, 3); // Limit to 3 recommendations
    }

    // If no keyword-based recommendations, get random recipes (not in favorites)
    if (recommended.length === 0) {
      const nonFavorites = state.recipes.filter(recipe => !state.favorites.includes(recipe.id));
      recommended = nonFavorites.sort(() => Math.random() - 0.5).slice(0, 3);
    }

    return { recommendations: recommended };
  })
}))

export default useRecipeStore