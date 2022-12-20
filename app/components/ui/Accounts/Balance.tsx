import { IAccounts } from '../../../hooks';
import React from 'react';
import { Text, View } from 'react-native';

export const Balance = ({
  account: { balance, currency, name },
}: {
  account: IAccounts;
}): JSX.Element => {
  return (
    <View
      style={{
        width: '66.666667%',
      }}
    >
      <Text
        style={{
          fontSize: 15,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '600',
        }}
      >
        {Intl.NumberFormat(undefined, {
          currency,
          style: 'currency',
        }).format(balance)}
      </Text>
    </View>
  );
};
