import React from 'react';
import {View} from 'react-native';
import {SectionSeparator, SearchBox, DealsPriceFilter} from '../index';
import {DealsScreenInputsProps} from './props';

const DealsScreenInputs = ({handleParams}: DealsScreenInputsProps) => {
  return (
    <View>
      <SectionSeparator title="Browse deals" />
      <SearchBox
        placeholder="Search games"
        title="Search by title"
        handleClick={(title: string) => handleParams({title})}
      />
      <DealsPriceFilter
        onPriceChange={(name: string, value: string) => {
          handleParams({[name]: value});
        }}
      />
    </View>
  );
};

export default DealsScreenInputs;
