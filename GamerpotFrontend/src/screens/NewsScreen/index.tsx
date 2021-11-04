import React from 'react';
import {TabSection, Wrapper} from '../../components';
import {data} from '../../library/constants/tabSectionExample';

const NewsScreen = () => {
  return (
    <Wrapper>
      <TabSection tabData={data} />
    </Wrapper>
  );
};

export default NewsScreen;
