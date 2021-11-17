import {StyleSheet} from 'react-native';
import {colors} from '../../../library/constants/colors';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  modalDescription: {
    backgroundColor: colors.lightGray,
    height: 230,
    top: 240,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  pencilIcon: {
    position: 'absolute',
    alignSelf: 'flex-end',
    borderWidth: 4,
    borderColor: colors.grayComplementary,
  },
  textInputContainer: {
    backgroundColor: colors.grayComplementary,
    top: 100,
    borderRadius: 10,
    margin: 10,
    height: 115,
  },
  descriptionText: {
    top: 20,
    color: colors.secondary,
    fontSize: 16,
    textAlign: 'justify',
    bottom: 2,
    margin: 8,
    padding: 10,
    height: 80,
    borderRadius: 10,
  },
  btnText: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
  },
  btnSave: {
    backgroundColor: colors.darkPastelGreen,
    alignSelf: 'center',
    borderRadius: 10,
    top: 40,
  },
  aboutContainer: {
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 10,
    width: 141,
    height: 30,
    backgroundColor: colors.darkPastelGreen,
    top: -12,
  },
  aboutText: {
    color: colors.secondary,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
