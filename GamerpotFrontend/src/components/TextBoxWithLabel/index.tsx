import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {TextBoxWithLabelProps} from './props';

const TextBoxWithLabel = ({
  value,
  label,
  onChange,
  onSubmit,
  name,
}: TextBoxWithLabelProps) => {
  return (
    <View style={styles.row}>
      <Text style={styles.labels}>{label}: </Text>
      <TextInput
        value={value}
        style={styles.inputs}
        onChangeText={onChange}
        onSubmitEditing={() => onSubmit(name, value)}
      />
    </View>
  );
};

export default TextBoxWithLabel;
