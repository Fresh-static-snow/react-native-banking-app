import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'Change me',
  authDomain: 'Change me',
  projectId: 'Change me',
  storageBucket: 'Change me',
  messagingSenderId: 'Change me',
  appId: 'Change me',
  measurementId: 'Change me',
};

initializeApp(firebaseConfig);

export const AUTH = getAuth();

export const register = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(AUTH, email, password);

export const login = async (email: string, password: string) =>
  await signInWithEmailAndPassword(AUTH, email, password);

export const logout = async () => await signOut(AUTH);

export const DB = getFirestore();

export enum DBCollections {
  STORIES = 'stories',
  USERS = 'users',
  ACCOUNTS = 'accounts',
}
