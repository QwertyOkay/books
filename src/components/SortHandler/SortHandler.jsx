import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dropdown from 'components/Dropdown/Dropdown';

const SortHandler = ({ onSort }) => {
  const [selectedOption, setSelectedOption] = useState('Name');

  const handleSort = option => {
    const sortKey = option === 'Name' ? 'name' : option.toLowerCase();
    setSelectedOption(option);
    onSort(sortKey);
  };

  return (
    <Dropdown selectedOption={selectedOption} onOptionClicked={handleSort} />
  );
};

SortHandler.propTypes = {
  onSort: PropTypes.func.isRequired,
};

export default SortHandler;
