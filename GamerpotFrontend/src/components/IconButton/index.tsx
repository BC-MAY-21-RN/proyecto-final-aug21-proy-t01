import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

const IconButton = () => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={arrowPress}>
      <Icon name="arrow-left" size={32} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default IconButton;
