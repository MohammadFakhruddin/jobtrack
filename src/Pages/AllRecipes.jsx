import React from 'react';
import { Link, useLoaderData } from 'react-router'; 
import { HiOutlineArrowRight } from 'react-icons/hi';

const AllRecipes = () => {
  const recipes = useLoaderData();
  console.log(recipes);


  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">All Recipes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes?.map((recipe) => (
          <div key={recipe._id} className="card bg-base-100 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition">
            <figure>
              <img src={recipe.image} alt={recipe.title} className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h3 className="text-xl font-semibold text-accent">{recipe.title}</h3>
              <p className="text-sm text-gray-500">Cuisine: <span className="text-neutral">{recipe.cuisineType}</span></p>

              <div className="flex flex-wrap gap-2 mt-2">
                  <span className="badge badge-outline badge-primary text-xs px-3 py-1">{recipe.categories}</span>
                
              </div>

              <div className="mt-4">
                <Link to={`/details/${recipe._id}`} className="btn btn-sm btn-outline btn-primary w-full flex justify-between items-center">
                  See Details <HiOutlineArrowRight className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;

