import React from 'react';
import {Pagination, Wrapper} from '../../components';

const AccountScreen = () => {
  return (
    <Wrapper>
      <Pagination
        totalItems={100}
        pagesToDisplay={3}
        pageSize={10}
        onPageChange={() => {}}
      />
    </Wrapper>
  );
};

export default AccountScreen;
