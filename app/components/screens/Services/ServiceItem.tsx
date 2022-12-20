import { IService } from './Services.types';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { FC } from 'react';
import { View, Text } from 'react-native';

export const ServiceItem: FC<{ service: IService }> = ({ service }) => {
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <View
        style={{
          borderRadius: 15,
          overflow: 'hidden',
          width: 56,
          height: 56,
          marginHorizontal: 16,
        }}
      >
        <LinearGradient
          colors={['black', 'black']}
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MaterialIcons color="#FFF" name={service.icon} size={30} />
        </LinearGradient>
      </View>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          marginTop: 6,
          fontSize: 12,
          lineHeight: 16,
          alignSelf: 'center',
          width: 56,
          textAlign: 'center',
        }}
      >
        {service.title}
      </Text>
    </View>
  );
};
