import { Dimensions, Platform, ScaledSize } from 'react-native';

const IPhoneXDimension: number = 812;

function isDimensionHigher(dim: ScaledSize) {
  return dim.height >= IPhoneXDimension;
}

export function isIPhoneModelHigher() {
  const dim = Dimensions.get('window');

  return (
    // This has to be iOS
    Platform.OS === 'ios' && isDimensionHigher(dim)
  );
}

export function isIPhoneXSize(dim: ScaledSize) {
  return dim.height == 812;
}

export function isIPhoneXrSize(dim: ScaledSize) {
  return dim.height == 896;
}
