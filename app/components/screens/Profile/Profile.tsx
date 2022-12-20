import { useAuth, useProfile, useProfileUpdate } from '../../../hooks';
import { Layout } from '../../layout';
import { Button, Field, Heading, Loader, Padding } from '../../ui';
import { styles } from './styles';
import React, { FC } from 'react';
import { Text, View } from 'react-native';

export const Profile: FC = () => {
  const { logout } = useAuth();
  const { profile, loading: isProfileLoading, name, setName } = useProfile();
  const { loading, isSuccess, updateProfile } = useProfileUpdate(name, profile?.docId);

  return (
    <Layout>
      <Padding>
        <Heading title="Profile" isCenter />

        {isSuccess && (
          <View style={styles.SuccessContainer}>
            <Text style={styles.SuccessText}>Profile updated successfully</Text>
          </View>
        )}

        {isProfileLoading || loading ? (
          <Loader />
        ) : (
          <>
            <Field onChange={setName} value={name} placeholder="Enter name" />
            <Button title="Update profile" onPress={updateProfile} />
            <Button title="Logout" onPress={logout} color="blue" />
          </>
        )}
        
      </Padding>
    </Layout>
  );
};
