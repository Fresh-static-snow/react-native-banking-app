import { DB, DBCollections } from '../../../firebase';
import { useAuth } from '../../../hooks';
import { IAccounts, TCard, TCurrency } from '../../../hooks/useAccounts';
import { alertAsync, alertErrorHandler } from '../../../utils/alert';
import { cardNumberGenerator } from '../../../utils/cardNumberGenerator';
import { Button } from '../Button/Button';
import { FieldValue, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';

export const AddProduct = () => {
  const { user } = useAuth();

  const registerHandler = async () => {
    try {
      const currency = await alertAsync<TCurrency>({
        title: 'Currency',
        message: 'Select account currency:',
        button1: { text: 'EUR', resolveValue: 'EUR' },
        button2: { text: 'USD', resolveValue: 'USD' },
      });

      const cardType = await alertAsync<TCard>({
        title: 'Card type',
        message: 'Select card type:',
        button1: { text: 'Black', resolveValue: 'Black' },
        button2: { text: 'Premium', resolveValue: 'Premium' },
      });

      await addDoc(collection(DB, DBCollections.ACCOUNTS), {
        userId: user?.uid,
        balance: 0,
        cardNumber: cardNumberGenerator(),
        currency,
        name: cardType,
        timestamp: serverTimestamp(),
      } as unknown as Omit<IAccounts, '_id'> & { timestamp: FieldValue });
    } catch (e) {
      alertErrorHandler({ message: 'Error applying', e });
    }
  };

  return <Button onPress={registerHandler} title="Apply for a new product" />;
};
