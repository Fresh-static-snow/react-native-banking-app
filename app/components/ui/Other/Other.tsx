import { IOtherItem, OtherItem } from './OtherItem';
import React from 'react';
import { View, ScrollView } from 'react-native';

const list: IOtherItem[] = [
  {
    iconName: 'mobile1',
    title: 'Mobile',
  },
  {
    iconName: 'home',
    title: 'Housing',
  },
  { iconName: 'wifi', title: 'Internet' },
  { iconName: 'car', title: 'Transport' },
];

export const Other = () => {
  return (
    <View>
      <ScrollView
        style={{
          paddingVertical: 18,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {list.map((item, index) => (
          <OtherItem key={index} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};
