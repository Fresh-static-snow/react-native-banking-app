import { useAccounts } from '../../../hooks/useAccounts';
import { Loader } from '../Loader';
import { AccountItem } from './AccountItem';
import React, { FC, Fragment } from 'react';
import { View, Text } from 'react-native';

export const Accounts: FC = () => {
  const { accounts, loading } = useAccounts();
  return (
    <View>
      {loading && <Loader />}
      {accounts.length === 0 && <Text>You dont have any cards</Text>}
      {!loading &&
        accounts.length !== 0 &&
        accounts.map(account => <AccountItem key={account._id} account={account} />)}
    </View>
  );
};
