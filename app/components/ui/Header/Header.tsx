import { useProfile } from '../../../hooks';
import { Avatar } from '../Avatar/Avatar';
import { Loader } from '../Loader';
import { styles } from './styles';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const Header: FC = () => {
  const { name, loading } = useProfile();
  const { navigate } = useNavigation();

  return loading ? (
    <Loader />
  ) : (
    <View style={styles.headerContainer}>
      <Avatar name={name ?? 'XXX'} />
      <TouchableOpacity
        style={styles.goProfileContainer}
        onPress={() => navigate('Profile' as never)}
      >
        <Text style={styles.profileName}>{name ?? 'XXX'}</Text>
        <Entypo name="chevron-small-right" size={28} style={styles.arrow} />
      </TouchableOpacity>
    </View>
  );
};
