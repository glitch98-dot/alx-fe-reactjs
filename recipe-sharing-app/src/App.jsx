import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Recipe Sharing App</h1>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecommendationsList />
                <FavoritesList />
                <RecipeList />
              </>
            } />
            <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App