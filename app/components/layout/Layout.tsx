import { styles } from './styles';
import React, { FC, PropsWithChildren } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

interface ILayout {
  isScrollView?: boolean;
}

export const Layout: FC<PropsWithChildren<ILayout>> = ({
  children,
  isScrollView = true,
}) => {
  return (
    <>
      {isScrollView ? (
        <ScrollView style={styles.layoutContainer}>{children}</ScrollView>
      ) : (
        <View style={styles.layoutContainer}>{children}</View>
      )}
    </>
  );
};
