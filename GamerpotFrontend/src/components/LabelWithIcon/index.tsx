import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {LabelWithIconProps} from './props';
import {styles} from './styles';

const LabelWithIcon = ({children, icon}: LabelWithIconProps) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} style={styles.icon} />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default LabelWithIcon;
