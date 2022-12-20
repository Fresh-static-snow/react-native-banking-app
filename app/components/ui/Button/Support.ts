import { IButton } from './Button.types';

export const underlayColor = ({ color }: Pick<IButton, 'color'>) => {
  switch (color) {
    case 'blue':
      return '#FBBF24';
    case 'gray':
      return '#D6D8D8';
  }
};
