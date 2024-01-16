import React, { useState } from 'react';
import styles from './Dropdown.module.scss';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Name');

  const options = ['Popularity', 'Name', 'Newest'];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <span className={styles.dropdownSort}>Sort By</span>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>
        {selectedOption}
      </button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map(option => (
            <li
              className={styles.dropdownItem}
              onClick={onOptionClicked(option)}
              key={option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
