// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

// interface CheckPermissionProps {
//   requiredPermission: string;
//   children: React.ReactNode;
// }

// const CheckPermission: React.FC<CheckPermissionProps> = ({ requiredPermission, children }) => {
//   const { permissions } = useAuth();

//   // Check if the user has the required permission
//   if (requiredPermission && (!permissions || !permissions.includes(requiredPermission))) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   // Render children if permission is granted
//   return <>{children}</>;
// };

// export default CheckPermission;
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface CheckPermissionProps {
  requiredPermission: string;
  children: React.ReactNode;
}

const CheckPermission: React.FC<CheckPermissionProps> = ({ requiredPermission, children }) => {
  const { permissions } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Use the "from" state or fallback to the current path
  const from = location.state?.from || '/dashboard ';
  console.log("checkPermission", { from, current: location.pathname }); // Debugging

  useEffect(() => {
    // Redirect if the required permission is missing
    if (requiredPermission && (!permissions || !permissions.includes(requiredPermission))) {
      navigate(from, { replace: true });
    }
  }, [requiredPermission, permissions, navigate, from]);

  // Render children if the user has permission
  if (requiredPermission && (!permissions || !permissions.includes(requiredPermission))) {
    return null; // Don't render children if permission is missing
  }

  return <>{children}</>;
};

export default CheckPermission;
