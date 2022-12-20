import {
  Auth,
  Home,
  Payments,
  Services,
  Support,
  More,
  Profile,
  Footer,
} from '../components';
import { useAuth } from '../hooks/useAuth';
import { TypedRootStackParamList } from './Navigation.types';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC, useEffect, useState } from 'react';

const { Navigator, Screen } = createNativeStackNavigator<TypedRootStackParamList>();

export const Navigation: FC = () => {
  const ref = useNavigationContainerRef();
  const [name, setName] = useState<string | undefined>(undefined);
  const { user } = useAuth();

  useEffect(() => {
    const timeout = setTimeout(() => setName(ref.getCurrentRoute()?.name), 100);

    return () => clearTimeout(timeout);
  }, [ref]);

  useEffect(() => {
    const listener = ref.addListener('state', () => setName(ref.getCurrentRoute()?.name));

    return () => ref.removeListener('state', listener);
  }, [ref]);

  return (
    <>
      <NavigationContainer ref={ref}>
        <Navigator
          initialRouteName={user ? 'Home' : 'Auth'}
          screenOptions={{ headerShown: false }}
        >
          {user ? (
            <>
              <Screen name={'Home'} component={Home} />
              <Screen name={'Profile'} component={Profile} />
              <Screen name={'Payments'} component={Payments} />
              <Screen name={'Services'} component={Services} />
              <Screen name={'Support'} component={Support} />
              <Screen name={'More'} component={More} />
            </>
          ) : (
            <Screen name={'Auth'} component={Auth} />
          )}
        </Navigator>
        {user && name && <Footer currentRoute={name} />}
      </NavigationContainer>
    </>
  );
};
