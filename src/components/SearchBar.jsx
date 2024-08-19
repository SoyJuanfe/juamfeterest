import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <button className=" flex Search">
      <FaSearch />
      Buscar
    </button>
  );
};

export default SearchBar;

