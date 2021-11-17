import React from 'react';
import {View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RoundedIconProps} from './props';

const RoundedIcon = ({
  name,
  size,
  color,
  customStyle,
  onPress,
}: RoundedIconProps) => {
  return (
    <View style={customStyle}>
      <MaterialCommunityIcons
        name={name}
        color={color}
        size={size}
        onPress={onPress}
      />
    </View>
  );
};

export default RoundedIcon;
