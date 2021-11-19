import {StyleSheet} from 'react-native';
import {colors} from '../../../library/constants/colors';

export const styles = StyleSheet.create({
  closeIcon: {
    alignSelf: 'flex-end',
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: colors.complementary2,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
