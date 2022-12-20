import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TypedRootStackParamList = {
  Auth: undefined;
  Home: undefined;
  Profile: undefined;
  Services: undefined;
  Support: undefined;
  Payments: undefined;
  More: undefined;
};
export type Props = NativeStackScreenProps<TypedRootStackParamList>;
export type ScreenNavigationProp = Props['navigation'];
export type ScreenRouteProp = Props['route'];
