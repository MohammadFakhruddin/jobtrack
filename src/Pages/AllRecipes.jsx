import { Link, useLoaderData } from 'react-router';
import { HiOutlineArrowRight } from 'react-icons/hi';

const AllRecipes = () => {
  const recipes = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-[#FF725E] mb-10">
        All Recipes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes?.map((recipe) => (
          <div
            key={recipe._id}
            className="bg-[#FFF8F5] dark:bg-[#1A1A1A] border border-[#FFD19C] rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold text-[#FF725E] mb-2">{recipe.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-200">
                <span className="font-semibold text-[#FF725E]">Cuisine:</span> {recipe.cuisineType}
              </p>

              <div className="mt-2">
                <span className="inline-block text-xs font-medium bg-[#FFD19C] text-[#5c3b1e] px-3 py-1 rounded-full">
                  {recipe.categories}
                </span>
              </div>

              <div className="mt-5">
                <Link
                  to={`/details/${recipe._id}`}
                  className="block text-center bg-[#FF725E] text-white px-4 py-2 rounded hover:bg-opacity-90 transition"
                >
                  See Details <HiOutlineArrowRight className="inline-block ml-1 text-lg" />
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
