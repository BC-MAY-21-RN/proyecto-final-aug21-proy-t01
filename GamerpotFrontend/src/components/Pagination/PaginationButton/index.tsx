import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {PaginationButtonProps} from './props';

const PaginationButton = ({
  onPress,
  children,
  isActive = false,
}: PaginationButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, isActive && styles.buttonActive]}
      onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default PaginationButton;
