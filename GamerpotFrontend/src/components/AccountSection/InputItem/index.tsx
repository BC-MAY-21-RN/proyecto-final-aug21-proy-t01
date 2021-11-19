import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styles} from './styles';
import {InputTextProps} from './props';

const InputItem = ({...props}: InputTextProps) => {
  const {label, error, touched} = props;
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input} {...props} placeholder={label} />
      </View>
      <View>
        {!!error && touched && <Text style={styles.textColor}>{error}</Text>}
      </View>
    </View>
  );
};

export default InputItem;
