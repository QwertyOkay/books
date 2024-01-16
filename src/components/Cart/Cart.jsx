import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { removeItem, resetCart } from 'redux/cartSlice';
import Button from 'components/Button/Button';
import ContactForm from 'components/ContactForm';
import styles from './Cart.module.scss';

function Cart({ close }) {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const dispatch = useDispatch();

  const products = useSelector(state => state.cart.products);

  const total = products
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <>
      <div className={styles.backDrop} onClick={() => close(false)}>
        <div className={styles.cart} onClick={e => e.stopPropagation()}>
          <div className={styles.wrap}>
            <h1 className={styles.title}>Your order</h1>
            {products?.map(item => (
              <div className={styles.item} key={item.id}>
                <img src={item.image} alt={item.image} />
                <div className={styles.details}>
                  <h2 className={styles.itemTitle}>
                    {item.title?.substring(0, 40)}
                  </h2>
                  <p className={styles.itemDesc}>
                    {item.desc?.substring(0, 100)}
                  </p>
                  <div className={styles.itemPrice}>
                    {item.quantity} x € {item.price}
                  </div>
                </div>
                <DeleteOutlinedIcon
                  className={styles.delete}
                  onClick={() => dispatch(removeItem(item.id))}
                />
              </div>
            ))}
            <div className={styles.total}>
              <span>SUBTOTAL :</span>
              <span className={styles.totalValue}>€ {total}</span>
            </div>
            <div className={styles.btnWrap}>
              <Button
                title="PROCEED TO CHECKOUT"
                variant={!(products.length > 0) ? 'disabledBtn' : 'btn'}
                onClick={() => {
                  if (products.length > 0) {
                    setIsOpenForm(true);
                  }
                }}
              />
            </div>

            <span
              className={styles.reset}
              onClick={() => dispatch(resetCart())}
            >
              Reset Cart
            </span>
          </div>
        </div>
      </div>
      {isOpenForm && <ContactForm showForm={setIsOpenForm} />}
    </>
  );
}

export default Cart;
