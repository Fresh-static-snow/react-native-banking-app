import type { TypedRootStackParamList } from '../../../navigation/Navigation.types';
import { AntDesign } from '@expo/vector-icons';

export interface FooterItem {
  iconname: keyof typeof AntDesign.glyphMap;
  title: keyof TypedRootStackParamList;
}
