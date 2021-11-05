import React, {useState, useEffect} from 'react';
import {getDeals} from '../../library/services/deals.service';
import {DealsSearchParams} from '../../library/models/dealsSearchParams';
import {DealInterface, DealsResponse} from '../../library/models/deal';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../HomeScreen/RootStackParams';
import {
  Wrapper,
  GameDeal,
  DealsScreenInputs,
  Pagination,
} from '../../components';
import {useService} from '../../library/hooks/useService';
import {Text} from 'react-native';
import {removeNullProperties} from '../../library/services/object.service';

type dealsScreenParams = NativeStackNavigationProp<RootStackParamList, 'Deals'>;

const initialParams: DealsSearchParams = {
  pageNumber: 0,
  pageSize: 15,
};

const DealsScreen = () => {
  const [deals, setDeals] = useState([] as DealInterface[]);
  const [dealsParams, setDealsParams] = useState(initialParams);
  const [totalItems, setTotalItems] = useState(1);
  const [areDealsLoading, callDealsService] = useService(getDeals);

  useEffect(() => {
    const fetchDeals = async () => {
      setDealsParams(removeNullProperties(dealsParams));
      const dealsResponse: DealsResponse = await callDealsService(dealsParams);
      setDeals(dealsResponse.list);
      setTotalItems(dealsResponse.totalItems);
    };
    fetchDeals();
  }, [dealsParams]);

  return (
    <Wrapper>
      <DealsScreenInputs
        handleParams={param =>
          setDealsParams({...dealsParams, ...param, pageNumber: 0})
        }
      />
      {areDealsLoading && <Text>Loading...</Text>}
      {!areDealsLoading &&
        deals.map((deal, index) => <GameDeal game={deal} key={index} />)}
      <Pagination
        totalItems={totalItems}
        pagesToDisplay={3}
        pageSize={dealsParams.pageSize}
        onPageChange={page =>
          setDealsParams({...dealsParams, pageNumber: page - 1})
        }
      />
    </Wrapper>
  );
};

export default DealsScreen;
