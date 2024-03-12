import { createContext, useState } from "react";

// Create a new context for user information
export const UserContext = createContext({});

// Provider component for UserContext to manage user information
export function UserContextProvider({ children }) {
  // State to hold user information
  const [userInfo, setUserInfo] = useState({});

  return (
    // Provide UserContext values to its children components
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
