# Expo Responsive Screen

Convert percentage to DP pixel & get screen orientation change.

## Features

- Transforme height/width percentage in pixel DP
- Get the screen orientation change
- Compatible with Expo.

## Installation

```bash
yarn add @adrianlivr/expo-responsive-dp

# or

npm install @adrianlivr/expo-responsive-dp
```

## Usage

```typescript
import { View } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  unitPercentageToDP as up,
} from '@adrianlivr/expo-responsive-dp';

const Compoment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.myText}>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  textWrapper: {
    height: hp(70), // 70% of height device window
    width: wp(80), // 80% of width device window
  },
  myText: {
    fontSize: up(2.7),
  },
});
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
