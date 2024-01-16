import { NavLink } from 'react-router-dom';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.linkWrap}>
          <NavLink to={'/products'} className={styles.link}>
            VIEW ALL
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Hero;
