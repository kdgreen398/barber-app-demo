// AuthContext.js
import React, { createContext, useContext } from "react";

function decodeJWT(token) {
  if (!token) {
    return null;
  }

  const parts = token.split(".");

  if (parts.length !== 3) {
    // Invalid token format
    return null;
  }

  const decodedHeader = JSON.parse(atob(parts[0]));
  const decodedPayload = JSON.parse(atob(parts[1]));

  return {
    header: decodedHeader,
    payload: decodedPayload,
  };
}

const AuthContext = createContext({ isAuthenticated: false, user: null });

const AuthProvider = ({ token, children }) => {
  // Decode the JWT
  const decodedToken = decodeJWT(token);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        user: decodedToken && decodedToken.payload,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
