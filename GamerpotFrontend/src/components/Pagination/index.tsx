import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PaginationProps} from './props';
import {styles} from './styles';
import {usePagination, isCurrentPage} from '../../library/hooks/usePagination';

const Pagination = ({
  totalItems,
  pageSize,
  pagesToDisplay,
  onPageChange,
  showLastPagesButtons = false,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(Math.ceil(totalItems / pageSize));
  const pagination = usePagination(
    totalItems,
    pageSize,
    pagesToDisplay,
    currentPage,
  );

  const handleChangePage = (page: string) => {
    if (page !== '...') {
      setCurrentPage(parseInt(page, 10));
      onPageChange(parseInt(page, 10));
    }
  };

  return (
    <View style={styles.container}>
      {showLastPagesButtons && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrentPage(1)}>
          <Text style={styles.text}>{'<<'}</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={() => currentPage > 1 && setCurrentPage(currentPage - 1)}>
        <Text style={styles.text}>{'<'}</Text>
      </TouchableOpacity>
      {pagination.map((pag, index) => (
        <TouchableOpacity
          style={[
            styles.button,
            isCurrentPage(pag, currentPage) && styles.buttonActive,
          ]}
          key={index}
          onPress={() => handleChangePage(pag)}>
          <Text style={styles.text}>{pag}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          currentPage < totalPages && setCurrentPage(currentPage + 1)
        }>
        <Text style={styles.text}>{'>'}</Text>
      </TouchableOpacity>
      {showLastPagesButtons && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrentPage(Math.ceil(totalItems / pageSize))}>
          <Text style={styles.text}>{'>>'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Pagination;
