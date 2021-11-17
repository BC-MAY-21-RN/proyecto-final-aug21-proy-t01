import React from 'react';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';
import Tag from '../Tag';
import {TextButtonProps} from './TextButtonProps';

const TextButton = ({text, onClick, disabled = false}: TextButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      style={styles.container}
      disabled={disabled}>
      <Tag text={text} />
    </TouchableOpacity>
  );
};

export default TextButton;
