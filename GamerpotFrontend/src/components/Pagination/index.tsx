import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {PaginationProps} from './props';
import {styles} from './styles';

const Pagination = ({
  totalItems,
  pageSize,
  pagesToDisplay,
  onPageChange,
  showLastPagesButtons = false,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState([] as Array<string>);
  const [totalPages, setTotalPages] = useState(Math.ceil(totalItems / pageSize));

  const handleChangePage = (page: string) => {
    if (page !== '...') {
      setCurrentPage(parseInt(page, 10));
      onPageChange(parseInt(page, 10));
    }
  };

  const isCurrentPage = (page: string) => {
    return parseInt(page, 10) === currentPage;
  };

  const calculateLowerLimit = () => {
    if (totalPages <= pagesToDisplay + 1) {
      // Caso especial
      return 1;
    } else if (
      currentPage > 1 &&
      currentPage < Math.ceil(pagesToDisplay / 2) + 1
    ) {
      // Caso 2
      return 1;
    } else if (
      currentPage >= Math.ceil(pagesToDisplay / 2) + 1 &&
      currentPage + Math.ceil(pagesToDisplay / 2) < totalPages
    ) {
      // Caso 3
      const newLowerLimit = currentPage - Math.floor(pagesToDisplay / 2);
      return newLowerLimit;
    } else if (currentPage + Math.ceil(pagesToDisplay / 2) >= totalPages) {
      // Caso 4
      const limitNew = totalPages - pagesToDisplay;
      return limitNew;
    } else {
      return 1;
    }
  };

  const calculatePagination = (lowerLimit: number) => {
    const paginationNumbers = [];
    for (let i = 0; i < pagesToDisplay; i++) {
      paginationNumbers.push(`${lowerLimit + i}`);
    }
    if (!(currentPage + Math.ceil(pagesToDisplay / 2) >= totalPages)) {
      paginationNumbers.push('...');
    }
    paginationNumbers.push(`${totalPages}`);
    return paginationNumbers;
  };

  const getPagination = () => {
    const newLimit = calculateLowerLimit();
    const newPagination = calculatePagination(newLimit);
    setPagination(newPagination);
  };

  useEffect(() => {
    getPagination();
  }, [currentPage]);

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
          style={[styles.button, isCurrentPage(pag) && styles.buttonActive]}
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
