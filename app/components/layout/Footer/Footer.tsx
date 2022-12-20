import { isIPhoneModelHigher } from '../../../utils/isIphoneX';
import { FooterItem } from './Footer.types';
import { NavItem } from './NavItem';
import React, { FC } from 'react';
import { View } from 'react-native';

export const menu: FooterItem[] = [
  { iconname: 'creditcard', title: 'Home' },
  { iconname: 'pay-circle1', title: 'Payments' },
  { iconname: 'switcher', title: 'Services' },
  { iconname: 'message1', title: 'Support' },
  { iconname: 'ellipsis1', title: 'More' },
];

interface IFooterProps {
  currentRoute: string;
}

export const Footer: FC<IFooterProps> = ({ currentRoute }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: isIPhoneModelHigher() ? 25 : 0,
      }}
    >
      {menu.map((item, index) => (
        <NavItem key={index} currentRoute={currentRoute} item={item} />
      ))}
    </View>
  );
};
