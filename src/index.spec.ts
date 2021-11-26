import {
  widthPercentageToDP,
  heightPercentageToDP,
  currentOrientation,
  unitPercentageToDP,
  screenUnitPercentageToDP,
  screenWidthPercentageToDP,
  screenHeightPercentageToDP,
} from './index';

describe('Expo Responsive Screen', () => {
  it('widthPercentageToDP should return a number', () => {
    expect(typeof widthPercentageToDP(75)).toEqual('number');
  });
  it('heightPercentageToDP should return a number', () => {
    expect(typeof heightPercentageToDP(50)).toEqual('number');
  });
  it('unitPercentageToDP should return a number', () => {
    expect(typeof unitPercentageToDP(50)).toEqual('number');
  });
  it('screenWidthPercentageToDP should return a number', () => {
    expect(typeof screenWidthPercentageToDP(50)).toEqual('number');
  });
  it('screenHeightPercentageToDP should return a number', () => {
    expect(typeof screenHeightPercentageToDP(50)).toEqual('number');
  });
  it('screenUnitPercentageToDP should return a number', () => {
    expect(typeof screenUnitPercentageToDP(50)).toEqual('number');
  });
  it('currentOrientation should return portrait or landscape', () => {
    expect(currentOrientation()).toEqual('portrait' || 'landscape');
  });
});
