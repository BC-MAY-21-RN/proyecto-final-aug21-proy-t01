import React, {useState, useEffect} from 'react';
import {getDeals} from '../../library/services/deals.service';
import {DealsSearchParams} from '../../library/models/dealsSearchParams';
import {DealInterface} from '../../library/models/deal';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../HomeScreen/RootStackParams';
import {
  SectionSeparator,
  Wrapper,
  GameDeal,
  SearchBox,
  DealsPriceFilter,
} from '../../components';
import {useService} from '../../library/hooks/useService';
import {Text} from 'react-native';

type dealsScreenParams = NativeStackNavigationProp<RootStackParamList, 'Deals'>;

const initialParams: DealsSearchParams = {
  pageNumber: 0,
  pageSize: 20,
};

const DealsScreen = () => {
  const [deals, setDeals] = useState([] as DealInterface[]);
  const [dealsParams, setDealsParams] = useState(initialParams);
  const [areDealsLoading, callDealsService] = useService(getDeals);

  const handleSearchGame = (title: string) => {
    setDealsParams({...dealsParams, title});
  };

  const handlePriceChange = (name: string, value: string) => {
    setDealsParams({...dealsParams, [name]: value});
  };

  useEffect(() => {
    const fetchDeals = async () => {
      console.log(dealsParams);
      const response = await callDealsService(dealsParams);
      setDeals(response);
    };
    fetchDeals();
  }, [dealsParams]);

  return (
    <Wrapper>
      <SectionSeparator title="Browse deals" />
      <SearchBox
        placeholder="Search games"
        title="Search by title"
        handleClick={handleSearchGame}
      />
      <DealsPriceFilter onPriceChange={handlePriceChange} />
      {areDealsLoading && <Text>Loading...</Text>}
      {!areDealsLoading &&
        deals.map((deal, index) => <GameDeal game={deal} key={index} />)}
    </Wrapper>
  );
};

export default DealsScreen;
