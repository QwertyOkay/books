import React from 'react';
import PropTypes from 'prop-types';
import BookCounter from 'components/BookCounter/BookCounter';
import SortHandler from 'components/SortHandler/SortHandler';
import styles from './SortingAndCountingSection.module.scss';

const SortingAndCountingSection = ({ type, onSort }) => (
  <div className={styles.sectionWrap}>
    <BookCounter type={type} />
    <SortHandler onSort={onSort} />
  </div>
);

SortingAndCountingSection.propTypes = {
  type: PropTypes.string.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default SortingAndCountingSection;
