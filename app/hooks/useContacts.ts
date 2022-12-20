import { DB, DBCollections } from '../firebase';
import { useAuth } from './useAuth';
import { IProfile } from './useProfile';
import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState, useMemo } from 'react';

export interface IContact {
  _id: string;
  displayName: string;
  cardNumber: string;
}

export const useContacts = () => {
  const [contacts, setContacts] = useState<IContact[] | null>(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(
    () =>
      onSnapshot(
        query(collection(DB, DBCollections.ACCOUNTS), where('userId', '!=', user?.uid)),
        async snapshot => {
          const contactsFire = await Promise.all(
            snapshot.docs.map(async d => {
              const data = d.data() as IContact & { userId: string };

              let displayName: string = '';

              const q = query(
                collection(DB, DBCollections.USERS),
                where('_id', '==', data._id),
              );

              const querySnapshot = await getDocs(q);

              querySnapshot.forEach(doc => {
                displayName = (doc.data() as IProfile).displayName;
              });

              return {
                ...data,
                _id: d.id,
                displayName,
              };
            }),
          );

          setContacts(
            contactsFire
              .filter((v, index, a) => {
                return a.findIndex(t => t.displayName === v.displayName) === index;
              })
              .filter(i => i.displayName),
          );
          setLoading(false);
        },
      ),
    [user?.uid],
  );

  return { contacts, loading };
};
