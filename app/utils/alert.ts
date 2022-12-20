import { Alert } from 'react-native';

type Button<T = string> = {
  text: T;
  resolveValue: T;
};

interface IAlertAsync<T> {
  message: string;
  title: string;
  button1: Button<T>;
  button2: Button<T>;
}

export const alertAsync = <T extends string | undefined>({
  title,
  message,
  button1,
  button2,
}: IAlertAsync<T>) => {
  return new Promise(resolve =>
    Alert.alert(
      title,
      message,
      [
        {
          text: button1.text,
          onPress: () => resolve(button1.resolveValue),
        },
        {
          text: button2.text,
          onPress: () => resolve(button2.resolveValue),
        },
      ],
      { cancelable: false },
    ),
  );
};

export const alertErrorHandler = ({ message, e }: { message: string; e: unknown }) => {
  if (e instanceof Error) {
    Alert.alert(message, e.message);
  } else Alert.alert('An unexpected error occurred');
};
