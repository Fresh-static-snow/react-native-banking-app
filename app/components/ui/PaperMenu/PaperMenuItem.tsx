import { BOX_SHADOW } from '../../../styles';
import { Heading } from '../Heading';
import { IPaperMenuItem } from './PaperMenu.types';
import { MaterialIcons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { View, Text, Pressable, Linking, PlatformColor } from 'react-native';

const atmsURL: string =
  'https://www.google.com/maps/search/privatBank+atms/@50.5434314,30.1843394,13z/data=!3m1!4b1';

export const list: IPaperMenuItem[] = [
  {
    title: 'ATM Machines',
    description: 'Search for ATM`s and other banks on the mapcccccc sdfdsfnsdfsd',
    link: atmsURL,
    icon: 'account-balance',
  },
  {
    title: 'Top-up Points',
    description: 'Cash replenishment in dollars, euros',
    link: atmsURL,
    icon: 'account-balance',
  },
  {
    title: 'For Business',
    description: 'Online banking for small business',
    link: atmsURL,
    icon: 'account-balance',
  },
  {
    title: 'Communication',
    description: 'By email and social networks',
    link: atmsURL,
    icon: 'account-balance',
  },
];

export const PaperMenuItem: FC<{ item: IPaperMenuItem }> = ({ item }) => {
  return (
    <View
      style={{
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 14,
        padding: 14,
        height: 112,
        justifyContent: 'space-between',
        ...BOX_SHADOW,
      }}
    >
      <Pressable
        onPress={() => Linking.openURL(item.link)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Heading title={item.title} size="medium" />
        <View
          style={{
            borderRadius: 9999,
            backgroundColor: PlatformColor('systemBlue'),
            width: 48,
            height: 48,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <MaterialIcons name={item.icon} size={30} />
        </View>
      </Pressable>
      <Text
        style={{
          flex: 1,
          flexWrap: 'wrap',
          flexShrink: 1,
        }}
      >
        {item.description}
      </Text>
    </View>
  );
};
