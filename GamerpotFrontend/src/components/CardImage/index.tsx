import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './styles';

const CardImage = ({image = ''}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={{uri: image}} style={styles.image} />
    </View>
  );
};

export default CardImage;
