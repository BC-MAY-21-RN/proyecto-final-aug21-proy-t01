import React, {useState} from 'react';
import {Pagination, Wrapper} from '../../components';
import {Text} from 'react-native';
import {styles} from './styles';

const AccountScreen = () => {
  const [page, setPage] = useState(1);
  return (
    <Wrapper>
      <Text style={styles.example}>You are on page {page}</Text>
      <Pagination
        totalItems={120}
        pagesToDisplay={3}
        pageSize={10}
        onPageChange={setPage}
      />
    </Wrapper>
  );
};

export default AccountScreen;
