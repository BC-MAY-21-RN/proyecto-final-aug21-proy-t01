import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import PaginationButton from '../PaginationButton';
import {PaginationSideButtonsProps} from './props';

const PaginationSideButtons = ({
  totalPages,
  currentPage,
  children,
  showLastPagesButtons = false,
  handleChangePage,
}: PaginationSideButtonsProps) => {
  return (
    <View style={styles.container}>
      {showLastPagesButtons && (
        <PaginationButton onPress={() => handleChangePage('1')}>
          {'<<'}
        </PaginationButton>
      )}
      <PaginationButton
        onPress={() =>
          currentPage > 1 && handleChangePage(`${currentPage - 1}`)
        }>
        {'<'}
      </PaginationButton>
      <View style={styles.pageContainer}>{children}</View>
      <PaginationButton
        onPress={() =>
          currentPage < totalPages && handleChangePage(`${currentPage + 1}`)
        }>
        {'>'}
      </PaginationButton>
      {showLastPagesButtons && (
        <PaginationButton onPress={() => handleChangePage(`${totalPages}`)}>
          {'>>'}
        </PaginationButton>
      )}
    </View>
  );
};

export default PaginationSideButtons;
