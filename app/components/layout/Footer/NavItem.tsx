import { FooterItem } from './Footer.types';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Pressable, PlatformColor, Text } from 'react-native';

export const NavItem: FC<{ item: FooterItem; currentRoute: string }> = ({
  item,
  currentRoute,
}) => {
  const { navigate } = useNavigation();
  const isActive = currentRoute === item.title;

  return (
    <Pressable
      style={{ alignItems: 'center', width: '20%' }}
      onPress={() => navigate(item.title)}
    >
      <AntDesign
        name={item.iconname}
        style={{
          fontSize: 20,
          lineHeight: 28,
          color: isActive ? PlatformColor('systemBlue') : PlatformColor('systemGray'),
        }}
      />
      <Text
        style={{
          fontSize: 12,
          lineHeight: 16,
          color: isActive ? PlatformColor('systemBlue') : PlatformColor('systemGray'),
          marginTop: 1,
        }}
      >
        {item.title}
      </Text>
    </Pressable>
  );
};
