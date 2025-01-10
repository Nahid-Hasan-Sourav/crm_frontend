import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Zone from "../pages/zone/Index";
import Division from "../pages/Division/Index";

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
            // {
            //     path: "", // This will render when the user visits /dashboard
            //     element: <Index />,
            // },
            {
                path: "zones", // This renders at /dashboard/index
                element: <Zone/>
            },
            {
                path: "divisions", // This renders at /dashboard/index
                element: <Division/>
            },
        ],
    },
]);
