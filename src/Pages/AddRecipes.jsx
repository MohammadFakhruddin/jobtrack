import { toast } from "react-toastify";

const handleAddRecipe = (e) =>{
    e.preventDefault();
  const form = e.target;
  const formData = new FormData(form)
  const recipeData = Object.fromEntries(formData.entries())
  console.log(recipeData);

  fetch('http://localhost:5000/recipes  ', {
    method:'POST',
    headers:{
        'content-type' : 'application/json'
    },
    body:JSON.stringify(recipeData)
  })
  .then(res => res.json())
  .then(data =>{
    if (data.insertedId){
        console.log('after adding', data);
        toast.success('Recipe Added Successfully')
    }
  })


}


const AddRecipes = () => {
    return (
        <div className="max-w-2xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center text-primary mb-10">Add a New Recipe</h2>

            <form onSubmit={handleAddRecipe} className="space-y-6 bg-base-100 p-6 rounded-xl shadow-lg">
                
        
                <div>
                    <label className="label">
                        <span className="label-text text-accent font-semibold">Image URL</span>
                    </label>
                    <input type="text" name="image" placeholder="Paste image URL" className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text text-accent font-semibold">Title</span>
                    </label>
                    <input type="text" name="title" placeholder="Recipe Title" className="input input-bordered w-full" />
                </div>

             
                <div>
                    <label className="label">
                        <span className="label-text text-accent font-semibold">Ingredients</span>
                    </label>
                    <textarea name="ingredients" className="textarea textarea-bordered w-full" rows="3" placeholder="List ingredients..."></textarea>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text text-accent font-semibold">Instructions</span>
                    </label>
                    <textarea name="instructions" className="textarea textarea-bordered w-full" rows="4" placeholder="Write cooking steps..."></textarea>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text text-accent font-semibold">Cuisine Type</span>
                    </label>
                    <select name="cuisineType" className="select select-bordered w-full">
                        <option disabled selected>Select Cuisine</option>
                        <option value="Italian">Italian</option>
                        <option value="Mexican">Mexican</option>
                        <option value="Indian">Indian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text text-accent font-semibold">Preparation Time (minutes)</span>
                    </label>
                    <input type="number" name="preparationTime" placeholder="e.g. 30" className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">
                        <span className="label-text text-accent font-semibold">Categories</span>
                    </label>
                    <div className="flex flex-wrap gap-4">
                        {["Breakfast", "Lunch", "Dinner", "Dessert", "Vegan"].map((cat) => (
                            <label key={cat} className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" name="categories" value={cat} className="checkbox checkbox-primary" />
                                <span>{cat}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="label">
                        <span className="label-text text-accent font-semibold">Like Count</span>
                    </label>
                    <input type="number" name="likeCount" value={0} readOnly className="input input-bordered bg-gray-100 w-full" />
                </div>

                <div className="text-center pt-4">
                    <button type="submit" className="btn btn-primary px-10">Add Recipe</button>
                </div>
            </form>
        </div>
    );
};

export default AddRecipes;
