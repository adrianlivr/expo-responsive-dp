import React from 'react';
import { Dimensions, PixelRatio, ScaledSize } from 'react-native';

let { width: windowWidth, height: windowHeight } = Dimensions.get('window');
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');

const percentageCalculation = (max: number, value: number) =>
  PixelRatio.roundToNearestPixel(max * (value / 100));

const unitCalculation = (height: number, width: number, value: number) => {
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)
    ),
    value
  );
};

export const widthPercentageToDP = (width: number) => {
  return percentageCalculation(windowWidth, width);
};

export const heightPercentageToDP = (height: number) => {
  return percentageCalculation(windowHeight, height);
};

export const unitPercentageToDP = (value: number) => {
  return unitCalculation(windowHeight, windowWidth, value);
};

export const screenWidthPercentageToDP = (width: number) => {
  return percentageCalculation(screenWidth, width);
};

export const screenHeightPercentageToDP = (height: number) => {
  return percentageCalculation(screenHeight, height);
};

export const screenUnitPercentageToDP = (value: number) => {
  return unitCalculation(screenHeight, screenWidth, value);
};

export const currentOrientation = () => {
  return windowWidth < windowHeight ? 'portrait' : 'landscape';
};

export const listenOrientationChange = (
  {
    setOrientation,
  }: {
    setOrientation?: React.Dispatch<React.SetStateAction<string>> | null;
  } = { setOrientation: null }
) => {
  Dimensions.addEventListener(
    'change',
    ({ window }: { window: ScaledSize }) => {
      windowWidth = window.width;
      windowHeight = window.height;

      setOrientation && setOrientation(currentOrientation());
    }
  );
};

export const removeOrientationListener = () => {
  Dimensions.removeEventListener('change', () => null);
};
