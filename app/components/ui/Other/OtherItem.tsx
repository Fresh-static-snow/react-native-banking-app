import { BOX_SHADOW } from '../../../styles';
import { Icon } from './Icon';
import { AntDesign } from '@expo/vector-icons';
import React, { FC } from 'react';
import { View, Text, Pressable } from 'react-native';

export interface IOtherItem {
  iconName: keyof typeof AntDesign.glyphMap;
  title: string;
}

export const OtherItem: FC<{ item: IOtherItem }> = ({ item }) => {
  return (
    <Pressable
      style={{
        backgroundColor: 'white',
        padding: 8,
        width: 96,
        height: 96,
        borderRadius: 12,
        marginLeft: 14,
        ...BOX_SHADOW,
      }}
    >
      <Icon iconName={item.iconName} />
      <Text
        style={{
          marginTop: 6,
          fontSize: 12,
          lineHeight: 16,
        }}
      >
        {item.title}
      </Text>
    </Pressable>
  );
};
