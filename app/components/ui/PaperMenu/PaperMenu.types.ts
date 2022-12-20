import { MaterialIcons } from '@expo/vector-icons';

export interface IPaperMenuItem {
  title: string;
  description: string;
  icon: keyof typeof MaterialIcons['glyphMap'];
  link: string;
}
