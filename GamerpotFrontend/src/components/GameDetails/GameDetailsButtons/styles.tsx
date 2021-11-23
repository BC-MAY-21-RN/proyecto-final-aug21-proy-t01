import {StyleSheet} from 'react-native';
import {colors} from '../../../library/constants/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
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
