import {useState, useEffect} from 'react';

export const usePagination = (
  totalItems: number,
  pageSize: number,
  pagesToDisplay: number,
  currentPage: number,
) => {
  const [pagination, setPagination] = useState([] as Array<string>);

  const getPagination = () => {
    const totalPages = Math.ceil(totalItems / pageSize);
    const newLimit = calculateLowerLimit(
      totalPages,
      pagesToDisplay,
      currentPage,
    );
    const newPagination = calculatePagination(
      pagesToDisplay,
      currentPage,
      newLimit,
      totalPages,
    );
    setPagination(newPagination);
  };

  useEffect(() => {
    getPagination();
  }, [currentPage]);

  return pagination;
};

const calculateLowerLimit = (
  totalPages: number,
  pagesToDisplay: number,
  currentPage: number,
) => {
  let lowerLimit = 1;
  const centralPage = Math.ceil(pagesToDisplay / 2);
  if (
    currentPage >= centralPage + 1 &&
    currentPage + centralPage < totalPages
  ) {
    lowerLimit = currentPage - Math.floor(pagesToDisplay / 2);
  } else if (currentPage + centralPage >= totalPages) {
    lowerLimit = totalPages - pagesToDisplay;
  }
  return lowerLimit;
};

const calculatePagination = (
  pagesToDisplay: number,
  currentPage: number,
  lowerLimit: number,
  totalPages: number,
) => {
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

export const isCurrentPage = (page: string, currentPage: number) => {
  return parseInt(page, 10) === currentPage;
};
