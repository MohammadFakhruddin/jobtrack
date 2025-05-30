import React, { useEffect, useState } from 'react';
import { Link } from 'react-router'; 

const TopRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/topRecipes')
      .then(res => res.json())
      .then(data => {
        setRecipes(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <section className="py-10 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-[#FF725E] mb-10">Top Recipes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div
            key={recipe._id}
            className="bg-[#FFF8F5] dark:bg-[#1A1A1A] rounded-lg shadow-md overflow-hidden border border-[#FFD19C]"
          >
            <img
              src={recipe.image || 'https://via.placeholder.com/300'}
              alt={recipe.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-[#FF725E] mb-2">{recipe.title}</h2>
              <div className="text-sm text-[#333333] dark:text-gray-200 space-y-1">
                <p><span className="font-semibold text-[#FF725E]">Cuisine:</span> {recipe.cuisineType}</p>
                <p><span className="font-semibold text-[#FF725E]">Prep Time:</span> {recipe.preparationTime} mins</p>
                <p><span className="font-semibold text-[#FF725E]">Category:</span> {recipe.categories}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-[#FF725E]">❤️ {recipe.likes} Likes</span>
                <Link
                  to={`/details/${recipe._id}`}
                  className="px-3 py-1 rounded bg-[#FF725E] text-white text-sm hover:bg-opacity-90"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/all"
          className="bg-[#FF725E] text-white px-6 py-2 rounded hover:bg-opacity-80 transition"
        >
          See All Recipes
        </Link>
      </div>
    </section>
  );
};

export default TopRecipes;
