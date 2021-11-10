import React from 'react';
import {Alert} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {SelectoPickerProps} from './props';
import {colors} from '../../library/constants/colors';

const SelectorPicker = ({data, defaultText}: SelectoPickerProps) => {
  return (
    <SelectDropdown
      buttonStyle={styles.buttomBorder}
      buttonTextStyle={styles.rowText}
      rowStyle={styles.row}
      rowTextStyle={styles.rowText}
      defaultButtonText={defaultText}
      renderDropdownIcon={() => (
        <MaterialCommunityIcons
          name="chevron-down"
          color={colors.secondary}
          size={32}
        />
      )}
      data={data}
      onSelect={(selectedItem, _index) => {
        Alert.alert(selectedItem);
      }}
      buttonTextAfterSelection={(selectedItem, _index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, _index) => {
        return item;
      }}
    />
  );
};
export default SelectorPicker;
