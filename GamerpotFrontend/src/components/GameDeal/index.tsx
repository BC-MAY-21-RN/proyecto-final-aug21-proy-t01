import React from 'react';
import {View, Text, Image} from 'react-native';
import {GameDealProps} from './props';
import {styles} from './styles';

const GameDeal = ({game}: GameDealProps) => {
  return (
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
  );
};

export default GameDeal;
