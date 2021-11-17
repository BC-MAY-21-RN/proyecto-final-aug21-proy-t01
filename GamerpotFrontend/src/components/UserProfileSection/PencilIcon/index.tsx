import React from 'react';
import {View} from 'react-native';
import {colors} from '../../../library/constants/colors';
import RoundedIcon from '../RoundedIcon';
import {PencilIconProps} from './props';

const PencilIcon = ({editable, styleView, onPress}: PencilIconProps) => {
  return (
    <View>
      {editable && (
        <RoundedIcon
          name="pencil-outline"
          size={23}
          color={colors.secondary}
          customStyle={styleView}
          onPress={onPress}
        />
      )}
    </View>
  );
};

export default PencilIcon;
