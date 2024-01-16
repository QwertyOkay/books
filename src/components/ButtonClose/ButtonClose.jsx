import { CloseRounded } from '@mui/icons-material';

import styles from './ButtonClose.module.scss';

function ButtonClose({ variant = 'closeBtn', type = 'button', onClick }) {
  return (
    <button type={type} className={styles[variant]} onClick={onClick}>
      <CloseRounded fontSize="large" />
    </button>
  );
}

export default ButtonClose;
