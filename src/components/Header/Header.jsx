import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import useStickyHeader from 'hooks/useStickyHeader ';
import Cart from 'components/Cart';
import ExpandableSearchIcon from 'components/ExpandableSearchIcon';
import { ReactComponent as Logo } from '../../assets/images/goldrushies.svg';
import styles from './Header.module.scss';

function Header() {
  const { isCartOpen, isSticky, toggleCartOpen } = useStickyHeader();
  const products = useSelector(state => state.cart.products);

  return (
    <header className={`${styles.header} ${isSticky && styles.sticky}`}>
      <div className={styles.container}>
        <ExpandableSearchIcon />

        <NavLink className={styles.logo} to="/">
          <Logo />
        </NavLink>

        <li className={styles.icons}>
          <IconButton onClick={toggleCartOpen}>
            <ShoppingCartOutlinedIcon
              sx={{
                position: 'relative',
                borderRadius: '4px',
                // transition: 'opacity 0.9s',
                color: products.length > 0 ? '#000' : 'rgb(142, 140, 140)',
              }}
            />
            <span className={styles.amount}>{products.length}</span>
          </IconButton>
        </li>
      </div>
      {isCartOpen && <Cart close={toggleCartOpen} />}
    </header>
  );
}

export default Header;
