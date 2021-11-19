import React from 'react';
import {styles} from './styles';
import {CloseIconProps} from './props';
import {colors} from '../../../library/constants/colors';
import RoundedIcon from '../../UserProfileSection/RoundedIcon';

function CloseIcon({onPress}: CloseIconProps) {
  return (
    <RoundedIcon
      customStyle={styles.closeIcon}
      color={colors.grayComplementary}
      name="close"
      size={24}
      onPress={onPress}
    />
  );
}

export default CloseIcon;
