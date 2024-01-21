import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = ({ title }) => (
  <div className={styles.header}>
    <h2 className={styles.title}>{title}</h2>
  </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
