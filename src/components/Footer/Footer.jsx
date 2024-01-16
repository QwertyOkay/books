import { NavLink } from 'react-router-dom';
import {
  FacebookTwoTone,
  Instagram,
  Twitter,
  YouTube,
} from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import BeInTouch from 'components/BeInTouch';
import { ReactComponent as Logo } from 'assets/images/goldrushies.svg';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.top}>
        <li className={styles.beintouch}>
          <BeInTouch />
        </li>
        <li className={styles.item}>
          <h2 className={styles.title}>Customer Service</h2>
          <NavLink to="/terms" className={styles.link}>
            Terms & Conditions
          </NavLink>
          <NavLink to="/privacy" className={styles.link}>
            Privacy Policy
          </NavLink>
          <NavLink to="/products" className={styles.link}>
            Products
          </NavLink>
        </li>
        <li className={styles.item}>
          <h2 className={styles.title}>Links</h2>
          <NavLink to="/about" className={styles.link}>
            About us
          </NavLink>
          <NavLink to="/contact" className={styles.link}>
            Contact us
          </NavLink>
        </li>
        <li className={styles.item}>
          <h2 className={styles.title}>Orders</h2>
          <NavLink to="/returns" className={styles.link}>
            Free 30 Day Returns
          </NavLink>
          <NavLink to="/delivery" className={styles.link}>
            Shipping info
          </NavLink>
          <NavLink to="/warranty" className={styles.link}>
            Warranty info
          </NavLink>
        </li>
      </ul>
      <ul className={styles.bottom}>
        <li className={styles.left}>
          <NavLink className={styles.logo} to="/">
            <Logo />
          </NavLink>
          <span className={styles.copyright}>
            HB.com &copy; 2003 - 2023 <br /> All rights reserved
          </span>
        </li>
        <li className={styles.right}>
          <div className={styles.iconList}>
            <Tooltip
              title="Youtube"
              slotProps={{
                tooltip: {
                  sx: {
                    padding: '4px',
                    marginTop: '6px !important',
                    marginBottom: '6px !important',
                  },
                },
              }}
            >
              <YouTube
                fontSize={'medium'}
                className={styles.icon}
                onClick={() => window.open('https://www.youtube.com', '_blank')}
              />
            </Tooltip>

            <Tooltip
              title="Instagram"
              slotProps={{
                tooltip: {
                  sx: {
                    padding: '4px',
                    marginTop: '6px !important',
                    marginBottom: '6px !important',
                  },
                },
              }}
            >
              <Instagram
                fontSize={'medium'}
                className={styles.icon}
                onClick={() =>
                  window.open('https://www.instagram.com', '_blank')
                }
              />
            </Tooltip>

            <Tooltip
              title="Twitter"
              slotProps={{
                tooltip: {
                  sx: {
                    padding: '4px',
                    marginTop: '6px !important',
                    marginBottom: '6px !important',
                  },
                },
              }}
            >
              <Twitter
                fontSize={'medium'}
                className={styles.icon}
                onClick={() => window.open('https://www.twitter.com', '_blank')}
              />
            </Tooltip>

            <Tooltip
              title="Facebook"
              slotProps={{
                tooltip: {
                  sx: {
                    padding: '4px',
                    marginTop: '6px !important',
                    marginBottom: '6px !important',
                  },
                },
              }}
            >
              <FacebookTwoTone
                fontSize={'medium'}
                className={styles.icon}
                onClick={() =>
                  window.open('https://www.facebook.com', '_blank')
                }
              />
            </Tooltip>
          </div>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
