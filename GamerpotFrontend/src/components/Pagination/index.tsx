import React, {useState} from 'react';
import {PaginationProps} from './props';
import {usePagination, isCurrentPage} from '../../library/hooks/usePagination';
import PaginationButton from './PaginationButton';
import PaginationSideButtons from './PaginationSideButtons';

const Pagination = ({
  totalItems,
  pageSize,
  pagesToDisplay,
  onPageChange,
  showLastPagesButtons = false,
  startOnPage = 1,
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(startOnPage);
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
    <PaginationSideButtons
      {...{totalPages, currentPage, handleChangePage, showLastPagesButtons}}>
      {pagination.map((pag, index) => (
        <PaginationButton
          key={index}
          isActive={isCurrentPage(pag, currentPage)}
          onPress={() => handleChangePage(pag)}>
          {pag}
        </PaginationButton>
      ))}
    </PaginationSideButtons>
  );
};

export default Pagination;
