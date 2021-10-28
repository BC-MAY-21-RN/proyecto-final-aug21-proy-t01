import React from 'react';
import {View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import {GameDealProps} from './props';
import {API_REDIRECT_URL} from '../../library/constants/dealsConstants';
import {styles} from './styles';

const GameDeal = ({game}: GameDealProps) => {
  const handleClick = () => {
    Linking.openURL(`${API_REDIRECT_URL}${game.dealID}`);
  };
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.container}>
        <Image source={{uri: game.thumb}} style={styles.image} />
        <View style={styles.titleContainer}>
          <Text style={styles.gameTitle} numberOfLines={2}>
            {game.title}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={[styles.discountText, styles.priceText]}>
            {`-${Math.floor(game.savings)}%`}
          </Text>
          <Text style={[styles.normalPriceText, styles.priceText]}>
            {`$${game.normalPrice}`}
          </Text>
          <Text style={[styles.gameTitle, styles.priceText]}>
            {`$${game.salePrice}`}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default GameDeal;
