import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/all',
                element: <AllRecipes />
            },
            {
                path: '/add',
                element: <AddRecipe />
            },
            {
                path: '/myrecipes',
                element: <MyRecipe />
            },
            {
                path: '/auth',
                element: <AuthLayout />,
                children: [
                    {
                        path: '/auth/login',
                        element: <LogIn />
                    },
                    {
                        path: '/auth/signup',
                        element: <SignUp />
                    }
                ]
            },
            {
                path: '*',
                element: <Error />
            }
        ]
    }
]);
