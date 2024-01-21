import React from 'react';
import LoaderIcon from 'components/LoaderIcon/LoaderIcon';
import styles from './Loader.module.scss';

const Loader = () => (
  <div className={styles.loader}>
    <LoaderIcon />
  </div>
);

export default Loader;
