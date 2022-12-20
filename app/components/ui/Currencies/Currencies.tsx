import { useCurrencies } from '../../../hooks';
import { BOX_SHADOW } from '../../../styles';
import { Loader } from '../Loader';
import React from 'react';
import { View, Text } from 'react-native';

export const Currencies = () => {
  const { currencies, loading } = useCurrencies();
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 14,
        padding: 14,
        justifyContent: 'space-between',
        ...BOX_SHADOW,
      }}
    >
      {loading && <Loader />}
      {!loading &&
        currencies.map(cur => (
          <View style={{ flexDirection: 'row' }} key={cur.name}>
            <Text
              style={{
                color: 'grey',
                marginRight: 4,
              }}
            >
              {cur.name}
            </Text>
            <Text style={{ color: 'black' }}>{cur.value}</Text>
          </View>
        ))}
    </View>
  );
};
