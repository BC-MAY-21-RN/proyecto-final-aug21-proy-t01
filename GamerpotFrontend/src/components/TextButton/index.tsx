import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Tag from '../Tag';
import {TextButtonProps} from './TextButtonProps';

const TextButton = ({text, onClick, disabled = false, viewStyle, textStyle}: TextButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={styles.container}
      disabled={disabled}>
      <Tag text={text} viewStyle={viewStyle} textStyle={textStyle} />
    </TouchableOpacity>
  );
};

export default TextButton;
