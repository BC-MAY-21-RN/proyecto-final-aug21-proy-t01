import {StyleSheet} from 'react-native';
import {colors} from '../../../library/constants/colors';
import {fonts} from '../../../library/constants/fonts';

export const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.grayComplementary,
    width: 360,
    height: 413,
    alignSelf: 'center',
    top: 120,
  },
  bgColor: {
    backgroundColor: colors.grayComplementary,
  },
  text: {
    alignSelf: 'center',
    fontFamily: fonts.header,
  },
  button: {
    width: 273,
    height: 46,
    backgroundColor: colors.darkPastelGreen,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.secondary,
    lineHeight: 24,
  },
});
