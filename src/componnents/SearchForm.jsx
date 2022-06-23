import { Divider, Input } from 'antd';
import React from 'react';
import { useState } from 'react';

function Search({ searchFood }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    searchFood(event.target.value);
  };
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={searchTerm}
        type="text"
        placeholder="Enter search query"
        onChange={handleSearch}
      />
    </>
  );
}

export default Search;
