import React, {useState, useEffect} from 'react';
import TabSection from '../TabSection';
import {View, Text} from 'react-native';
import {getTrendingData} from '../../library/utils/getTrendingData';
import {
  trending1,
  trending2,
  trending3,
} from '../../library/constants/trendingConstants';
import {TabItem} from '../TabSection/props';

const TrendingSection = () => {
  const [trendingData, setTrendingData] = useState([] as Array<TabItem>);
  useEffect(() => {
    const fetchData = async () => {
      const data1: TabItem = await getTrendingData(trending1);
      const data2: TabItem = await getTrendingData(trending2);
      const data3: TabItem = await getTrendingData(trending3);
      const newData = [data1, data2, data3];
      setTrendingData(newData);
    };
    fetchData();
  }, []);
  return <View>{trendingData && <TabSection tabData={trendingData} />}</View>;
};

export default TrendingSection;
