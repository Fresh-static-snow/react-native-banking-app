import { TypedRootStackParamList } from './app/navigation/Navigation.types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TypedRootStackParamList {}
  }
}
