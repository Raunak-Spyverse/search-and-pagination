import React from 'react';
import Pagination from '../ui/dashboard/pagination/addpagination';

interface LayoutProps {
  children: React.ReactNode;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, totalItems, itemsPerPage, onPageChange }) => {
  return (
    <div className="layout">
      <div className="content">
        {children}
      </div>
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default Layout;
