import React from 'react';

const UpdateRecipe = ({ recipe, onClose, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      image: e.target.image.value,
      title: e.target.title.value,
      ingredients: e.target.ingredients.value,
      instructions: e.target.instructions.value,
      cuisineType: e.target.cuisineType.value,
      preparationTime: e.target.preparationTime.value,
      categories: e.target.categories.value,
    };
    onSubmit(updatedRecipe);
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-base-100 p-6 rounded-lg w-full max-w-lg shadow-lg">
        <h2 className="text-xl font-bold text-primary mb-4">Update Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="image"
            defaultValue={recipe.image}
            placeholder="Image URL"
            className="w-full px-4 py-2 border rounded focus:outline-none"
            required
          />
          <input
            type="text"
            name="title"
            defaultValue={recipe.title}
            placeholder="Recipe Title"
            className="w-full px-4 py-2 border rounded focus:outline-none"
            required
          />
          <textarea
            name="ingredients"
            defaultValue={recipe.ingredients}
            placeholder="Ingredients"
            className="w-full px-4 py-2 border rounded focus:outline-none"
            required
          ></textarea>
          <textarea
            name="instructions"
            defaultValue={recipe.instructions}
            placeholder="Instructions"
            className="w-full px-4 py-2 border rounded focus:outline-none"
            required
          ></textarea>
          <input
            type="text"
            name="cuisineType"
            defaultValue={recipe.cuisineType}
            placeholder="Cuisine Type (e.g., Mexican)"
            className="w-full px-4 py-2 border rounded focus:outline-none"
            required
          />
          <input
            type="number"
            name="preparationTime"
            defaultValue={recipe.preparationTime}
            placeholder="Preparation Time (in mins)"
            className="w-full px-4 py-2 border rounded focus:outline-none"
            required
          />
          <select
            name="categories"
            defaultValue={recipe.categories}
            className="w-full px-4 py-2 border rounded focus:outline-none"
            required
          >
            <option value="">Select Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Vegan">Vegan</option>
          </select>

          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRecipe;
