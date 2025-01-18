// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios';

// // Define types for the user and context
// interface User {
//   id: string;
//   username: string;
//   // Add other user properties you need
// }

// interface AuthContextType {
//   user: User | null;
//   setUser: (user: User | null) => void;
//   logout: () => Promise<void>;
//   loading: boolean;
//   error: string | null;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider: React.FC = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Optionally, check if user is logged in by checking localStorage or cookies
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser)); // Restore the user from localStorage
//     }
//   }, []);

//   const logout = async () => {
//     setLoading(true);
//     setError(null); // Reset previous error
//     try {
//       // Call your logout API here
//       await axios.post('/logout'); // Assuming POST /logout is the endpoint for logging out

//       setUser(null); // Clear the user state after successful logout
//       localStorage.removeItem('user'); // Optionally remove the user from localStorage
//     } catch (err) {
//       console.error('Logout failed', err);
//       setError('Logout failed. Please try again.'); // Set error message
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, setUser, logout, loading, error }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Define types for the user and context
interface User {
  id: string;
  username: string;
  // Add other user properties you need
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
  permissions: string[]; // Correctly typed as an array of strings
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>({
    id: '1',
    username: 'Test User',
    // Add other user properties if necessary
  });

  const [permissions, setPermissions] = useState<string[]>([
    'view_dashboard',
    'manage_zones',
    'edit_posts',
  ]);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Optionally, check if user is logged in by checking localStorage or cookies
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Restore the user from localStorage
    }
  }, []);

  const logout = async () => {
    setLoading(true);
    setError(null); // Reset previous error
    try {
      // Call your logout API here
      await axios.post('/logout'); // Assuming POST /logout is the endpoint for logging out

      setUser(null); // Clear the user state after successful logout
      setPermissions([]); // Clear permissions on logout
      localStorage.removeItem('user'); // Optionally remove the user from localStorage
    } catch (err) {
      console.error('Logout failed', err);
      setError('Logout failed. Please try again.'); // Set error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, permissions, logout, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};
