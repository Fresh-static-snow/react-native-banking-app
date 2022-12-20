import { IButton } from './Button.types';
import { underlayColor } from './Support';
import { styles } from './styles';
import React, { FC } from 'react';
import { Text, TouchableHighlight, PlatformColor } from 'react-native';

export const Button: FC<IButton> = ({ onPress, title, color = 'blue' }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      // underlayColor={underlayColor({ color })}
      style={[styles.buttonContainer, { backgroundColor: PlatformColor('systemBlue') }]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};
