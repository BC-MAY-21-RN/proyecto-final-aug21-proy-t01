import React, {useState, useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import {getDeals} from '../../library/services/deals.service';
import {DealsSearchParams} from '../../library/models/dealsSearchParams';
import {DealInterface} from '../../library/models/deal';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../HomeScreen/RootStackParams';
import {useNavigation} from '@react-navigation/core';

type dealsScreenParams = NativeStackNavigationProp<RootStackParamList, 'Deals'>;

const DealsScreen = () => {
  const navigation = useNavigation<dealsScreenParams>();
  const [deals, setDeals] = useState([] as DealInterface[]);

  useEffect(() => {
    const fetchDeals = async () => {
      const params: DealsSearchParams = {
        pageNumber: 0,
        pageSize: 20,
      };
      const response = await getDeals(params);
      setDeals(response);
    };
    fetchDeals();
  }, []);

  return (
    <ScrollView>
      <Text>Deals</Text>
      {deals.map((deal, index) => (
        <Text key={index}>
          {deal.title}, {deal.storeName}
        </Text>
      ))}
    </ScrollView>
  );
};

export default DealsScreen;
