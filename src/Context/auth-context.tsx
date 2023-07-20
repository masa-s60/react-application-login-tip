import { createContext, useState, useContext } from 'react';
import { typeChildren, typeUser, typeAuthState } from '../types/type';

const AuthContext = createContext<typeAuthState | undefined>(undefined);

export function useAuthContext() {
  return useContext(AuthContext);
}


export const AuthProvider = ({ children }: typeChildren) => {
  const [user, setUser] = useState<typeUser>();

  const userContext: typeAuthState = {
    user,
    setUser
  };
  
  return <AuthContext.Provider value={userContext}>
    {children}
  </AuthContext.Provider>;
}