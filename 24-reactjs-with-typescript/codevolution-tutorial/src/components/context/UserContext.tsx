import { createContext } from 'react';

type AuthUserType = {
  name: string;
  email: string;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<null | AuthUserType>(null);

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  return <UserContext.Provider value={null}></UserContext.Provider>;
};
