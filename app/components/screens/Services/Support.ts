import { IService } from './Services.types';
import { Ico } from './Services.types';
import { MaterialIcons } from '@expo/vector-icons';

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export const listGenerator = (num: number) => {
  const iconsArray = Object.keys(MaterialIcons['glyphMap']);
  const array: IService[] = [];

  for (let i = 0; i <= num; i++) {
    const randomNumber = getRandomInt(num);
    array.push({
      icon: iconsArray[randomNumber + 1000] as Ico,
      title: iconsArray[randomNumber + 1000],
      discount: getRandomInt(num),
    });
  }
  return array;
};
