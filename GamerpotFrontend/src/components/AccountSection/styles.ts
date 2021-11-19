import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';

export const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.secondary,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 17,
  },
  button: {
    width: 270,
    height: 30,
    backgroundColor: colors.darkPastelGreen,
    justifyContent: 'center',
  },
  buttonWidth: {
    width: 300,
    height: 30,
    backgroundColor: colors.darkPastelGreen,
    justifyContent: 'center',
  },
  shortHeight: {
    height: 413,
  },
  largeHeight: {
    height: 541,
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    alignContent: 'center',
    justifyContent: 'flex-start',
  },
  section: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    top: 130,
  },
  textLabel: {
    color: colors.complementary2,
    fontSize: 20,
  },
});
