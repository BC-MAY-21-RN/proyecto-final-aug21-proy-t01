import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';

export const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: colors.complementary,
    opacity: 0.5,
    padding: 5,
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: colors.secondary,
    fontSize: 20,
  },
});
