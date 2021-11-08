import {StyleSheet} from 'react-native';
import {colors} from '../../library/constants/colors';
import {fonts} from '../../library/constants/fonts';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.complementary,
    flexDirection: 'row',
    marginBottom: 15,
  },
  image: {
    width: '38%',
  },
  titleContainer: {
    width: '36%',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  gameTitle: {
    color: colors.secondary,
    fontSize: 14,
    fontFamily: fonts.secondary,
  },
  priceContainer: {
    width: '26%',
    flexDirection: 'column',
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 15,
    alignSelf: 'center',
  },
  priceText: {
    textAlign: 'right',
    fontSize: 12,
    fontFamily: fonts.secondary,
  },
  discountText: {
    color: colors.green,
  },
  normalPriceText: {
    color: colors.lighterGray,
    textDecorationLine: 'line-through',
  },
});
