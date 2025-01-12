import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout";
import Zone from "../pages/zone/Index";
import Division from "../pages/Division/Index";
import WinChance from "../pages/WinChance/Index";
import TimeRange from "../pages/TimeRange/Index";
import Quotation from "../pages/Quotation/Index";
import Role from "../pages/Role/Index";
import Permission from "../pages/Permission/Index";
import User from "../pages/User/Index";

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
                path: "zones", 
                element: <Zone/>
            },
            {
                path: "divisions",
                element: <Division/>
            },

            {
                path: "win-chances",
                element: <WinChance/>
            },
            {
                path: "time-range",
                element: <TimeRange/>
            },
            {
                path: "quotations",
                element: <Quotation/>
            },
            {
                path: "roles",
                element: <Role/>
            },
            {
                path: "permissions",
                element: <Permission/>
            },
            {
                path: "users",
                element: <User/>
            },
        ],
    },
]);
