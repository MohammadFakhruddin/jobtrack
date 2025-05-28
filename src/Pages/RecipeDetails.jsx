import React from 'react';
import { useLoaderData } from 'react-router';

const RecipeDetails = () => {
  const recipe = useLoaderData();
  console.log(recipe);

  return (
    <div className="max-w-3xl my-20 mx-auto p-6 bg-base-100 rounded-lg shadow-md">
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      <h1 className="text-3xl font-bold mb-3 text-primary">{recipe.title}</h1>

      <div className="flex flex-wrap gap-4 mb-6 text-accent font-semibold">
        <span className="bg-primary bg-opacity-10 px-3 py-1 rounded-full">{recipe.cuisineType}</span>
        <span className="bg-primary bg-opacity-10 px-3 py-1 rounded-full">{recipe.categories}</span>
        <span className="bg-primary bg-opacity-10 px-3 py-1 rounded-full">Prep Time: {recipe.preparationTime} mins</span>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-primary mb-2">Ingredients</h2>
        <p className="text-text whitespace-pre-line">{recipe.ingredients}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-primary mb-2">Instructions</h2>
        <p className="text-text whitespace-pre-line">{recipe.instructions}</p>
      </section>
    </div>
  );
};

export default RecipeDetails;
