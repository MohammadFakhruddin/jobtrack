import React from 'react';
import { toast } from 'react-toastify';

const UpdateRecipe = ({ onClose, recipe, _id, onSubmit }) => {
  if (!recipe) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedRecipe = Object.fromEntries(formData.entries());

    fetch(`https://recipe-book-server-zeta.vercel.app/recipes/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedRecipe)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Updated Successfully');
          onSubmit({ ...updatedRecipe, _id });
          onClose();
        } else {
          toast.error('No changes detected or update failed');
        }
      })
      .catch(err => {
        console.error(err);
        toast.error('Something went wrong');
      });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-base-100 p-6 rounded-lg w-full max-w-lg shadow-lg">
        <h2 className="text-xl font-bold text-primary mb-4">Update Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="image" defaultValue={recipe.image} placeholder="Image URL" className="w-full px-4 py-2 border rounded" required />
          <input name="title" defaultValue={recipe.title} placeholder="Recipe Title" className="w-full px-4 py-2 border rounded" required />
          <textarea name="ingredients" defaultValue={recipe.ingredients} placeholder="Ingredients" className="w-full px-4 py-2 border rounded" required />
          <textarea name="instructions" defaultValue={recipe.instructions} placeholder="Instructions" className="w-full px-4 py-2 border rounded" required />
          <input name="cuisineType" defaultValue={recipe.cuisineType} placeholder="Cuisine Type" className="w-full px-4 py-2 border rounded" required />
          <input type="number" name="preparationTime" defaultValue={recipe.preparationTime} placeholder="Prep Time (mins)" className="w-full px-4 py-2 border rounded" required />
          <select name="categories" defaultValue={recipe.categories} className="w-full px-4 py-2 border rounded" required>
            <option value="">Select Category</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Dessert">Dessert</option>
            <option value="Vegan">Vegan</option>
          </select>
          <div className="flex justify-end gap-3 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRecipe;
