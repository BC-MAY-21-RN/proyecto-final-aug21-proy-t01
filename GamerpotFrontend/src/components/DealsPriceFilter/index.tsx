import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import {DealsPriceFilterProps} from './props';

const DealsPriceFilter = ({
  onMinPriceChange,
  onMaxPriceChange,
  onCurrencyChange,
  onPriceChange,
}: DealsPriceFilterProps) => {
  const [pickerValue, setPickerValue] = useState('usd');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const handlePickerChange = (item: string) => {
    setPickerValue(item);
    onCurrencyChange(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Filter by price</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.labels}>Minimum: </Text>
        <TextInput
          value={minPrice}
          style={styles.inputs}
          onChangeText={setMinPrice}
          onSubmitEditing={() => onPriceChange('lowerPrice', minPrice)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.labels}>Maximum: </Text>
        <TextInput
          value={maxPrice}
          style={styles.inputs}
          onChangeText={setMaxPrice}
          onSubmitEditing={() => onPriceChange('upperPrice', maxPrice)}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.labels}>Currency: </Text>
        <Picker
          style={styles.picker}
          mode="dropdown"
          selectedValue={pickerValue}
          onValueChange={item => handlePickerChange(item)}>
          <Picker.Item label="USD" value="usd" />
          <Picker.Item label="MXN" value="mxn" />
        </Picker>
      </View>
    </View>
  );
};

export default DealsPriceFilter;
