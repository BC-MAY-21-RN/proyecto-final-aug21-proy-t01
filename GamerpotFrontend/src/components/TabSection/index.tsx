import React, {useState} from 'react';
import {View} from 'react-native';
import {TabSectionProps} from './props';
import {styles} from './styles';
import TabHeader from './TabHeader/index';

const TabSection = ({tabData}: TabSectionProps) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <View style={styles.container}>
      <TabHeader
        tabData={tabData}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <View style={styles.dataContainer}>
        {tabData[activeTab] &&
          tabData[activeTab].data.map((data, index) => {
            const RenderComponent = tabData[activeTab]
              .render as React.ElementType;
            return <RenderComponent key={index} {...data} />;
          })}
      </View>
    </View>
  );
};

export default TabSection;
