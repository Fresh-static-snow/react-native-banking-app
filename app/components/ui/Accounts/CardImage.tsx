import Card from '../../../../assets/e-aid-card.png';
import { IAccounts, TCard } from '../../../hooks';
import { FC } from 'react';
import React, { Text, View, ImageBackground, ImageSourcePropType } from 'react-native';

const switchCard = (name: TCard): ImageSourcePropType => {
  switch (name) {
    case 'Black':
      return Card;
    case 'Premium':
      return Card;
    case 'Premium Gold':
      return Card;
  }
};

export const CardImage: FC<{ account: IAccounts }> = ({
  account: { name, cardNumber },
}) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <ImageBackground
        resizeMode="contain"
        source={switchCard(name)}
        style={{
          height: 46,
          width: 56,
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          paddingTop: 14,
          paddingRight: 2
        }}
      >
        <Text
          style={{
            fontSize: 8,
            fontWeight: '500',
            color: 'black',
            textAlign: 'right',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
          }}
        >
          ...{cardNumber.slice(-4)}
        </Text>
      </ImageBackground>
    </View>
  );
};
