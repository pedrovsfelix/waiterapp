import { createContext, useCallback, useEffect, useState } from "react";
import { localStorageKeys } from "../config/localStorageKeys";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { usersServices } from "../services/users";
import type { User } from "../entities/User";
import PageLoader from "../../ui/pages/PageLoader";
import { toast } from "react-toastify";

interface AuthContextValue {
  signedIn: boolean;
  user: User | undefined;
  signin(token: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const queryClient = useQueryClient();

  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
    return Boolean(storedAccessToken);
  });

  const { isError, isFetching, isSuccess, data } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => usersServices.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signin = useCallback((token: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, token);
    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    queryClient.removeQueries({ queryKey: ['users', 'me'] });
    setSignedIn(false);
  }, [queryClient]);

  useEffect(() => {
    if (isError) {

      toast.error("Sua sessão expirou!")
      signout();
    }
  }, [isError, signout]);

  if (isFetching) {
    return <PageLoader />;
  }

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSuccess && signedIn,
        user: data,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
