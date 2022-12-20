import { MaterialIcons } from '@expo/vector-icons';

export interface IService {
  icon: keyof typeof MaterialIcons['glyphMap'];
  title: string;
  discount: number;
}

export type Ico = keyof typeof MaterialIcons['glyphMap'];
