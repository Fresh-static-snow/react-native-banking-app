import { DB, DBCollections } from '../firebase';
import { useAuth } from './useAuth';
import { onSnapshot, query, collection, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export type TCurrency = 'EUR' | 'USD';
export type TCard = 'Premium' | 'Premium Gold' | 'Black';

export interface IAccounts {
  _id: string;
  userId: string;
  balance: number;
  cardNumber: string;
  currency: TCurrency;
  name: TCard;
}

export const useAccounts = () => {
  const [accounts, setAccounts] = useState<IAccounts[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { user } = useAuth();

  useEffect(
    () =>
      onSnapshot(
        query(collection(DB, DBCollections.ACCOUNTS), where('userId', '==', user?.uid)),
        snapshot => {
          setAccounts(snapshot.docs.map(d => ({ _id: d.id, ...d.data() } as IAccounts)));
          setLoading(false);
        },
      ),
    [user?.uid],
  );

  return { accounts, loading };
};
