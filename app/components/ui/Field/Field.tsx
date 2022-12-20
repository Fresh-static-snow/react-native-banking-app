import { styles } from './styles';
import React, { FC } from 'react';
import { TextInput } from 'react-native';

interface IField {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  isSecure?: boolean;
}

export const Field: FC<IField> = ({ onChange, value, placeholder, isSecure = false }) => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
      secureTextEntry={isSecure}
      autoCapitalize="none"
      style={styles.field}
    />
  );
};
