import { useRef } from 'react';
import notices from 'helpers/Notification.js';
import styles from './BeInTouch.module.scss';

function BeInTouch() {
  const emailRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();

    const email = emailRef.current.value;

    if (email) {
      notices.showSuccess(
        'Congratulations! You will now receive our latest special offers.'
      );
    }

    e.target.reset();
  };

  return (
    <section className={styles.beInTouch}>
      <div className={styles.wrap}>
        <div>
          <h3 className={styles.title}>Sign Up For Newsletters</h3>
          <p className={styles.desc}>
            Get e-mail updates about our latest <span>special offers</span>
          </p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            ref={emailRef}
            type="email"
            autoComplete="on"
            name="email"
            placeholder="Your email"
            className={styles.input}
            pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
          ></input>
          <button
            type="submit"
            aria-label="beInTouch button"
            className={styles.button}
          >
            JOIN US
          </button>
        </form>
      </div>
    </section>
  );
}

export default BeInTouch;
