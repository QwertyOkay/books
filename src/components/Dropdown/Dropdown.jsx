import React, { useState } from 'react';
import styles from './Dropdown.module.scss';

function Dropdown({ onSort }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Name');

  const options = ['Author', 'Name', 'Rating'];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    // Обновляем ключ сортировки в зависимости от выбранной опции
    onSort(value === 'Name' ? 'name' : value.toLowerCase());
  };

  return (
    <div className={styles.dropdown}>
      <span className={styles.dropdownSort}>Sort By</span>
      <button
        className={`${styles.dropdownButton} ${isOpen ? styles.active : ''}`}
        onClick={toggleDropdown}
      >
        {selectedOption}
      </button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map(option => (
            <li
              className={`${styles.dropdownItem} ${
                selectedOption === option ? styles.selected : ''
              }`}
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
