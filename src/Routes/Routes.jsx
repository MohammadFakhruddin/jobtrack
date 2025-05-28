import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllRecipes from "../Pages/AllRecipes";
import AddRecipes from "../Pages/AddRecipes";
import AuthLayout from "../Layout/AuthLayout";
import LogIn from "../Pages/LogIn";
import SignUp from "../Pages/SignUp";
import Error from "../Pages/Error";
import MyRecipe from "../Pages/MyRecipe";
import Loading from "../Components/Loading";
import RecipeDetails from "../Pages/RecipeDetails";
import UpdateRecipe from "../Pages/UpdateRecipe";

 export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/all',
                element:<AllRecipes></AllRecipes>,
                loader:()=> fetch(`http://localhost:5000/recipes`),
                hydrateFallbackElement:<Loading></Loading>           
            },
            {
                path:'/add',
                element:<AddRecipes></AddRecipes>
            },
            {
                path:'/myrecipe',
                element:<MyRecipe></MyRecipe>,
                loader:()=> fetch(`http://localhost:5000/recipes/`)
            },
            {
                path:'/details/:id',
                element:<RecipeDetails></RecipeDetails>,
                loader:({params}) =>fetch(`http://localhost:5000/recipes/${params.id}`),
                hydrateFallbackElement:<Loading></Loading>  
                        

            },
            {
                path:'/update/:id',
                element:<UpdateRecipe></UpdateRecipe>,
                loader:({params}) =>fetch(`http://localhost:5000/recipes/${params.id}`),
                hydrateFallbackElement:<Loading></Loading>  

            },
            
            {
                path:'/auth',
                element:<AuthLayout></AuthLayout>,
                children:[
                    {
                        path:'/auth/login',
                        element:<LogIn></LogIn>
                    },
                    {
                        path:'/auth/signup',
                        element:<SignUp></SignUp>
                    }
                ]
            },
            {
                path:'/*',
                element:<Error></Error>
            }
        ]
    }

])

