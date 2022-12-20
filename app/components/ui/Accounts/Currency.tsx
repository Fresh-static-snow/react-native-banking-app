import { IAccounts, TCurrency } from '../../../hooks';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

const switchCurrency = (currency: TCurrency): keyof typeof FontAwesome['glyphMap'] => {
  switch (currency) {
    case 'EUR':
      return 'euro';
    case 'USD':
      return 'usd';
  }
};

export const Currency = ({ currency }: Pick<IAccounts, 'currency'>): JSX.Element => {
  return (
    <View
      style={{
        width: 56,
        height: 56,
        borderRadius: 9999,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View
        style={{
          width: 56,
          height: 56,
          borderRadius: 9999,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FontAwesome name={switchCurrency(currency)} color="black" size={13} />
        <Text>{currency}</Text>
      </View>
    </View>
  );
};
