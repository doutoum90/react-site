import { Context, createContext, useState } from "react";

export const AuthContext: Context<any> = createContext({});

export function AuthProvider({ children }: { children: any }): JSX.Element {
  const [auth, setAuth] = useState();

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
}
