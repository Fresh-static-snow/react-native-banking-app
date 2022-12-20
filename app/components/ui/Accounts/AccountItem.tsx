import { IAccounts } from '../../../hooks';
import { BOX_SHADOW } from '../../../styles';
import { Balance } from './Balance';
import { CardImage } from './CardImage';
import { Currency } from './Currency';
import React, { FC } from 'react';
import { View } from 'react-native';

export const AccountItem: FC<{ account: IAccounts }> = ({ account }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14,
        paddingRight: 14,
        borderRadius: 14,
        ...BOX_SHADOW,
        backgroundColor: 'white',
      }}
    >
      <Currency currency={account.currency} />
      <Balance account={account} />
      <CardImage account={account} />
    </View>
  );
};
