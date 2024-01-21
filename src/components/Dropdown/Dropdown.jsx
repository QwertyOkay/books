import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.scss';

const Dropdown = ({ selectedOption, onOptionClicked }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const options = ['Author', 'Name', 'Rating'];

  return (
    <div className={styles.dropdown}>
      <span className={styles.dropdownSort}>Sort By</span>
      <button
        className={`${styles.dropdownButton} ${isOpen ? styles.active : ''}`}
        onClick={toggleDropdown}
      >
        {selectedOption}
        <span className={styles.dropdownArrow} />
      </button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map(option => (
            <li
              className={`${styles.dropdownItem} ${
                selectedOption === option ? styles.selected : ''
              }`}
              onClick={() => {
                onOptionClicked(option);
                toggleDropdown();
              }}
              key={option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  onOptionClicked: PropTypes.func.isRequired,
};

export default Dropdown;
