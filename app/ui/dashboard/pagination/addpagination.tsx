'use client';

import React, { useState } from 'react';
import { Button } from '@carbon/react';
import { ChevronLeft, ChevronRight } from '@carbon/icons-react';
import styles from './addpagination.module.css';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const AddPagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((page) => (
      <Button
        key={page}
        kind={page === currentPage ? 'primary' : 'ghost'}
        size="sm"
        className={styles.pageNumber}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Button>
    ));
  };

  return (
    <div className={styles.paginationContainer}>
      <Button
        kind="ghost"
        size="sm"
        onClick={() => handlePageChange(currentPage - 1)}
        className={currentPage === 1 ? styles.disabledButton : ''}
        disabled={currentPage === 1}
        renderIcon={ChevronLeft}
        hasIconOnly
      />
      {renderPageNumbers()}
      <Button
        kind="ghost"
        size="sm"
        onClick={() => handlePageChange(currentPage + 1)}
        className={currentPage === totalPages ? styles.disabledButton : ''}
        disabled={currentPage === totalPages}
        renderIcon={ChevronRight}
        hasIconOnly
      />
    </div>
  );
};

export default AddPagination;
