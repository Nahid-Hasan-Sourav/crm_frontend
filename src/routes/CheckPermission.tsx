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


import React from 'react';
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

  // Check if the user has the required permission
  if (requiredPermission && (!permissions || !permissions.includes(requiredPermission))) {
    // Redirect back to the previous location
    navigate(location.state?.from,{ replace: true }); // Replace to avoid back loop
    return null; 
  }

  // Render children if permission is granted
  return <>{React.cloneElement(children as React.ReactElement, { state: { from: location.pathname } })}</>;
};

export default CheckPermission;
