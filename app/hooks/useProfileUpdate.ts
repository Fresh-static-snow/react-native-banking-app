import { DB, DBCollections } from '../firebase';
import { alertErrorHandler } from '../utils/alert';
import { useAuth } from './useAuth';
import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';

export const useProfileUpdate = (name: string, docId: string) => {
  const { user } = useAuth();

  const [loading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateProfile = async () => {
    setIsLoading(true);
    setIsSuccess(false);
    if (!user) return;

    try {
      const docRef = doc(DB, DBCollections.USERS, docId);

      await updateDoc(docRef, {
        displayName: name,
      });

      setIsSuccess(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    } catch (e) {
      alertErrorHandler({ message: 'Error update profile', e });
    } finally {
      setIsLoading(false);
    }
  };

  return { loading, isSuccess, updateProfile };
};
