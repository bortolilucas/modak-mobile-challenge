import { Dimensions } from 'react-native';

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 640;

export const { width: screenWidth, height: screenHeight } =
  Dimensions.get('window');

export const scale = (size: number, width = screenWidth) =>
  (width / guidelineBaseWidth) * size;

export const verticalScale = (size: number, height = screenHeight) =>
  (height / guidelineBaseHeight) * size;
