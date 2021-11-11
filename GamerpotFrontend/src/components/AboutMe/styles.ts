import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';

export const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    width: 141,
    height: 30,
    top: 15,
    zIndex: 2,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    backgroundColor: colors.darkPastelGreen,
  },
  aboutText: {
    color: colors.secondary,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  descriptionContainer: {
    backgroundColor: colors.grayComplementary,
    width: 375,
    height: 109,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
  },
  textArea: {
    top: 34,
    fontSize: 16,
    color: colors.complementary2,
    textAlign: 'left',
    paddingLeft: 10,
    paddingRight: 10,
  },
  icon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    left: 340,
    top: 5,
  },
});
