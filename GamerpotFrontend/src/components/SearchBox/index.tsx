import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import {SearchBoxProps} from './props';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBox = ({
  placeholder = 'Search',
  title,
  handleClick = () => {},
}: SearchBoxProps) => {
  const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      <View>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          style={styles.input}
          placeholderTextColor="#fff"
          onSubmitEditing={() => handleClick(value)}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => handleClick(value)}>
          <Icon name="search" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBox;
