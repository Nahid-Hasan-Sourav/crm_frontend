// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
//     const { user } = useAuth();  // Correct usage of the custom hook
//     const location = useLocation();  // Get the current location

//     if (!user) {
//         return <Navigate to="/" state={{ from: location }} replace />;
//     }

    

//     return children;
// };

// export default ProtectedRoute;

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Assume this provides user and permissions

interface ProtectedRouteProps {
    children: React.ReactNode;
    requiredPermission?: string; // Optional: specify the required permission for the route
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredPermission }) => {
    const { user, permissions } = useAuth(); // Assume `permissions` is an array of user's permissions
    const location = useLocation();

    // Check if user is authenticated
    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    // Check if the user has the required permission
    if (requiredPermission && !permissions.includes(requiredPermission)) {
        return <Navigate to="/unauthorized" replace />;
    }

    // Render the protected component if all checks pass
    return <>{children}</>;
};

export default ProtectedRoute;
