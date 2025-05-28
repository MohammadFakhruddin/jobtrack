import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import UpdateRecipe from '../Pages/UpdateRecipe';
import Swal from 'sweetalert2';

const MyRecipe = () => {
  const myAllRecipes = useLoaderData();
  const [myRecipes, setMyRecipes] = useState(myAllRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/recipes/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your recipe has been deleted.", "success");
              const remaining = myRecipes.filter(recipe => recipe._id !== _id);
              setMyRecipes(remaining);
            }
          });
      }
    });
  };

  const handleUpdate = (updatedRecipe) => {
    setMyRecipes((prev) =>
      prev.map((recipe) =>
        recipe._id === updatedRecipe._id ? { ...recipe, ...updatedRecipe } : recipe
      )
    );
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myRecipes.map(recipe => (
          <div
            key={recipe._id}
            className="bg-[#FFF8F5] dark:bg-[#1A1A1A] rounded-lg shadow-md overflow-hidden border border-[#FFD19C]"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-[#FF725E] mb-2">{recipe.title}</h2>
              <div className="text-sm text-[#333333] dark:text-gray-200 space-y-1">
                <p><span className="font-semibold text-[#FF725E]">Ingredients:</span> {recipe.ingredients}</p>
                <p><span className="font-semibold text-[#FF725E]">Instructions:</span> {recipe.instructions}</p>
                <p><span className="font-semibold text-[#FF725E]">Cuisine:</span> {recipe.cuisineType}</p>
                <p><span className="font-semibold text-[#FF725E]">Prep Time:</span> {recipe.preparationTime} mins</p>
                <p><span className="font-semibold text-[#FF725E]">Category:</span> {recipe.categories}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-[#FF725E]">❤️ {recipe.likes} Likes</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedRecipe(recipe)}
                    className="px-3 py-1 rounded bg-[#FF725E] text-white text-sm hover:bg-opacity-90"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(recipe._id)}
                    className="px-3 py-1 rounded bg-red-500 text-white text-sm hover:bg-opacity-90"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedRecipe && (
        <UpdateRecipe
          recipe={selectedRecipe}
          _id={selectedRecipe._id}
          onSubmit={handleUpdate}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </>
  );
};

export default MyRecipe;
