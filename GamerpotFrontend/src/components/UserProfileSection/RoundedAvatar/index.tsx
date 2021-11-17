import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '../../../library/constants/colors';
import RoundedIcon from '../RoundedIcon';
import {styles} from './styles';
import {AvatarProps} from './props';

const RoundedAvatar = ({text, bgColor}: AvatarProps) => {
  return (
    <View style={[styles.profileContainer, {backgroundColor: bgColor}]}>
      <Text style={styles.textUser}>{text}</Text>
      <RoundedIcon
        name="camera-outline"
        size={22}
        color={colors.primary}
        customStyle={styles.camera}
      />
    </View>
  );
};

export default RoundedAvatar;
