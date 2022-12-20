import { PlatformColor, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  story: {
    width: 80,
    height: 80,
    borderRadius: 16,
    marginRight: 14,
    padding: 2,
    borderWidth: 1,
    borderColor: PlatformColor('systemBlue'),
    border: 'solid 1px',
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
  storyTitle: { margin: 4, fontWeight: '500' },
});
