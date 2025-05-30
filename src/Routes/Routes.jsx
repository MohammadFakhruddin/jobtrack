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
import PrivateRoute from "../Provider/PrivateRoute";
import BlogDetail from "../Pages/BlogDetail";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all',
                element: <AllRecipes></AllRecipes>,
                loader: () => fetch(`http://localhost:5000/recipes`),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/add',
                element: <PrivateRoute>
                    <AddRecipes></AddRecipes>

                </PrivateRoute>
            },
            {
                path: '/myrecipe',
                element: <PrivateRoute>
                    <MyRecipe></MyRecipe>
                </PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/recipes/`)
            },
            {
                path: '/details/:id',
                element: <PrivateRoute>
                    <RecipeDetails></RecipeDetails>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>


            },
            {
                path: '/update/:id',
                element: <UpdateRecipe></UpdateRecipe>,
                loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>

            },
            {
                path: '/blogs/:id',
                element: <PrivateRoute>
                    <BlogDetail></BlogDetail> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/blogs/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>




            },

            {
                path: '/auth',
                element: <AuthLayout></AuthLayout>,
                children: [
                    {
                        path: '/auth/login',
                        element: <LogIn></LogIn>
                    },
                    {
                        path: '/auth/signup',
                        element: <SignUp></SignUp>
                    }
                ]
            },
            {
                path: '/*',
                element: <Error></Error>
            }
        ]
    }

])

