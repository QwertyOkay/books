import React from 'react';
import styles from './Section.module.scss';

function Section({ variant = 'section', children }) {
  return <div className={styles[variant]}>{children}</div>;
}

export default Section;
