import { DB, DBCollections } from '../firebase';
import { useAuth } from './useAuth';
import { onSnapshot, collection, query, where, limit } from 'firebase/firestore';
import { useEffect, useMemo, useState } from 'react';

export interface IProfile {
  _id: string;
  displayName: string;
  docId: string;
}

export const useProfile = () => {
  const { user } = useAuth();

  const [loading, setIsLoading] = useState(true);
  const [profile, setProfile] = useState<IProfile>({} as IProfile);
  const [name, setName] = useState('');

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(DB, DBCollections.USERS),
          where('_id', '==', user?.uid),
          limit(1),
        ),
        snapshot => {
          const profile = snapshot.docs.map(d => ({
            ...(d.data() as Omit<IProfile, 'docId'>),
            docId: d.id,
          }))[0];

          setProfile(profile);
          setName(profile?.displayName ?? 'Change name');
          setIsLoading(false);
        },
      ),
    [profile.displayName, user?.uid],
  );

  const value = useMemo(
    () => ({
      profile,
      name,
      loading,
      setName,
    }),
    [profile, name, loading],
  );

  return value;
};
