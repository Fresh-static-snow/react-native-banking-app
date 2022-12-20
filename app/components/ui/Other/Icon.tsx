import { AntDesign } from '@expo/vector-icons';
import React, { FC } from 'react';
import { View, Text, PlatformColor } from 'react-native';

export const Icon: FC<{ iconName: keyof typeof AntDesign.glyphMap }> = ({ iconName }) => {
  return (
    <View
      style={{
        borderRadius: 9999,
        backgroundColor: PlatformColor('systemBlue'),
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AntDesign name={iconName} size={19} />
    </View>
  );
};
