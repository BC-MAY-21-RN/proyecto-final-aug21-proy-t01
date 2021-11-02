import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {DealsPriceFilterProps} from './props';

const DealsPriceFilter = ({onPriceChange}: DealsPriceFilterProps) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

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
    </View>
  );
};

export default DealsPriceFilter;
