import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {SearchBoxProps} from './props';
import {styles} from './styles';

const SearchBox = ({
  placeholder = 'Search',
  value,
  setValue,
  title,
}: SearchBoxProps) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholderTextColor="#fff"
      />
    </View>
  );
};

export default SearchBox;
