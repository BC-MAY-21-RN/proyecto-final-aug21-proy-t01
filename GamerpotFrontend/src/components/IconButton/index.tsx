import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {IconButtonProps} from './props';

const IconButton = ({onPress, icon = 'arrow-left'}: IconButtonProps) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <Icon name={icon} size={32} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default IconButton;
