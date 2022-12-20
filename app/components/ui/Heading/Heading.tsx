// import { styles } from './styles';
import React, { FC } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { View } from 'react-native';

interface IHeading {
  title: string;
  isCenter?: boolean;
  size?: 'small' | 'medium' | 'large';
  style?: TextStyle;
}

export const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    color: '#333',
    width: '100%',
    fontSize: 26,
  },
});

const switchFontSize = ({ size }: Pick<IHeading, 'size'>): TextStyle['fontSize'] => {
  switch (size) {
    case 'large':
      return 26;
    case 'medium':
      return 20;
    case 'small':
      return 14;
  }
};

export const Heading: FC<IHeading> = ({
  title,
  isCenter = false,
  size = 'large',
  style,
}) => {
  return (
    <View>
      <Text
        style={[
          styles.textStyle,
          { textAlign: isCenter ? 'center' : 'left', fontSize: switchFontSize({ size }) },
          style,
        ]}
      >
        {title}
      </Text>
    </View>
  );
};
