import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((err) => console.error("Error loading recipe details:", err));
  }, [id]);

  if (!recipe) {
    return <p className="p-6 text-center">Loading recipe...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
      <h1 className="text-4xl font-bold mt-6">{recipe.title}</h1>
      <p className="text-gray-700 mt-4">{recipe.summary}</p>

      {/* Ingredients */}
      <div className="mt-6 bg-white rounded-lg shadow p-4">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients?.map((ingredient, idx) => (
            <li key={idx}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="mt-6 bg-white rounded-lg shadow p-4">
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions?.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </div>

      <Link
        to="/"
        className="inline-block mt-6 text-blue-500 hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
}

export default RecipeDetail;
