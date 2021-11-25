import React from 'react';
import {View, Text} from 'react-native';
import {DetailsCardProps} from './props';
import {styles} from './styles';

const DetailsCard = ({bigText, smallText, minimalText}: DetailsCardProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigText}>
        {bigText}
        {minimalText && <Text style={styles.minimalText}>{minimalText}</Text>}
      </Text>
      <Text style={styles.smallText}>{smallText}</Text>
    </View>
  );
};

export default DetailsCard;
