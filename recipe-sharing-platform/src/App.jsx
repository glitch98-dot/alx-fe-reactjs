import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from ".src/components/HomePage";
import RecipeDetail from ".src/components/RecipeDetail";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
