import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Index from "../pages/Index";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/dashboard",
        element: <DefaultLayout />,
        children: [
            {
                path: "", // This will render when the user visits /dashboard
                element: <Index />,
            },
            {
                path: "index", // This renders at /dashboard/index
                element: <Index />,
            },
        ],
    },
]);
