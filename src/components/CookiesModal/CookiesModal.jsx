import { SetCookies } from 'hooks/useCookies';
import Button from 'components/Button';
import styles from './CookiesModal.module.scss';

const CookiesModal = ({ showCookies }) => {
  function checkCookie() {
    showCookies(false);
    SetCookies('goldrushies', JSON.stringify(true));
  }

  return (
    <>
      <div className={styles.cookieBar}>
        <p className={styles.cookieText}>
          We use cookies to better understand your preferences and provide a
          better experience.
        </p>
        <Button title={'GOT IT'} onClick={() => checkCookie()} />
      </div>
    </>
  );
};

export default CookiesModal;
