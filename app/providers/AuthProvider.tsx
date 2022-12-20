import { AUTH, DB, login, logout, register } from '../firebase';
import { alertErrorHandler } from '../utils/alert';
import { User, onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface IContext {
  user: User | null;
  loading: boolean;
  isLoadingInitial: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [loading, setIsLoading] = useState(false);

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user } = await register(email, password);

      await addDoc(collection(DB, 'users'), {
        _id: user.uid,
        displayName: 'Set your name',
      });
    } catch (e) {
      alertErrorHandler({ message: 'Error register', e });
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (e) {
      alertErrorHandler({ message: 'Error login', e });
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (e) {
      alertErrorHandler({ message: 'Error logout', e });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    () =>
      onAuthStateChanged(AUTH, user => {
        setUser(user || null);
        setIsLoadingInitial(false);
      }),
    [isLoadingInitial],
  );

  const value: IContext = useMemo(
    () => ({
      user,
      loading,
      isLoadingInitial,
      register: registerHandler,
      login: loginHandler,
      logout: logoutHandler,
    }),
    [user, loading, isLoadingInitial],
  );

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  );
};
