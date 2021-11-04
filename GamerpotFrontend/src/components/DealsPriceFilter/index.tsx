import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {DealsPriceFilterProps} from './props';
import TextBoxWithLabel from '../TextBoxWithLabel';

const DealsPriceFilter = ({onPriceChange}: DealsPriceFilterProps) => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const inputs = [
    {
      value: minPrice,
      name: 'lowerPrice',
      label: 'Minimum',
      onChange: setMinPrice,
      onSubmit: onPriceChange,
    },
    {
      value: maxPrice,
      name: 'upperPrice',
      label: 'Maximum',
      onChange: setMaxPrice,
      onSubmit: onPriceChange,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Filter by price</Text>
      </View>
      {inputs.map((input, index) => (
        <TextBoxWithLabel key={index} {...input} />
      ))}
    </View>
  );
};

export default DealsPriceFilter;
