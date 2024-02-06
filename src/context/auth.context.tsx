import { ReactNode, createContext, useState } from "react";

export type AuthContextType = {
  isAuth: boolean;
  authenticate: () => void;
};

export type AuthContextProviderType = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [isAuth, setIsAuth] = useState(false);

  function authenticate() {
    setIsAuth(true);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        authenticate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
