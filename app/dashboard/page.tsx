'use client';

import React from 'react';
import AddPagination from '../ui/dashboard/pagination/addpagination';
import Search from '../ui/dashboard/search/addsearch';

const Dashboard = () => {
  const totalItems = 100; 
  const itemsPerPage = 10; 

  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };
 
  const handlePageChange = (page: number) => {
    console.log('Page changed to:', page);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <h1>Dashboard</h1>
      <AddPagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Dashboard;
