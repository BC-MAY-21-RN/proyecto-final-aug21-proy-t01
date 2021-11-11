import React from 'react';
import {Alert} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';
import {SelectorPickerProps} from './props';
import {colors} from '../../library/constants/colors';

const SelectorPicker = ({
  data,
  defaultText,
  handleChange,
}: SelectorPickerProps) => {
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
          size={26}
        />
      )}
      data={data}
      onSelect={(selectedItem, _index) => {
        handleChange(selectedItem);
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
