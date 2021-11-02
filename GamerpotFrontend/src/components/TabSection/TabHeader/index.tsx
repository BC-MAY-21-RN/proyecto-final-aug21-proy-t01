import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {TabHeaderProps} from './props';

const TabHeader = ({tabData, activeTab, setActiveTab}: TabHeaderProps) => {
  const isTabActive = (index: number) => activeTab === index;
  return (
    <View style={styles.header}>
      {tabData.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.headerItem,
            isTabActive(index) && styles.headerItemActive,
          ]}
          onPress={() => setActiveTab(index)}>
          <Text
            style={[
              styles.headerItemTextBase,
              isTabActive(index) && styles.headerItemTextActive,
            ]}>
            {tab.route}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default TabHeader;
